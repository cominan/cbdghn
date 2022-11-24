import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { subport } from '../../app/selector/dataCitySlice';

export default function RegistorLogin() {
  const [value, setValue] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
  })
  const dispatch = useDispatch()
  const Location = useSelector((state => state.city.initValue.all))

  //RENDER CITY
  useEffect(() => {
    const citis = document.getElementById('citi')


    function renderCiti(data) {
      for (let x of data) {
        citis.options[citis.options.length] = new Option(x.Name, x.Id)
      }
    }
    renderCiti(Location)
  }, [Location])

  //REGISTOR ERROR BY USEFORM
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onBlurs = (values) => setValue({
    ...value,
    email: values.email,
    phone: values.number
  })//XỬ Lý GÌ ĐÓ VỚI DỮ LIỆU NGƯỜI DÙNG NHẬP

  //HANDLE MIN LENGTH WITH FULLNAME
  const [fullName, setFullName] = useState(false)
  const handleFullName = (e) => {
    if (e.target.value.length < 4) {
      setFullName(true)
    } else {
      setFullName(false)
    }
    setValue({ ...value, fullName: e.target.value })
  }

  //HANDLE ERROR BY USEFORM
  const [city, setCity] = useState(false)
  const handleSubmitForm = () => {
    if (value.fullName === '') {
      setFullName(true)
    }
    if (value.email === '') {
      errors.email = true
    }
    if (value.phone === '') {
      errors.number = true
    }
    if (value.city === '') {
      setCity(true)
    }
    !fullName && !errors.email && !errors.number && !city && dispatch(subport(value)) &&
      alert('Cám ơn bạn đã liên hệ! Chúng tôi sẽ trả lời bạn ngay khi có thể')
  }
  return (
    <div className='mt-36 laptop:grid grid-cols-2 gap-8 text-center pb-32'>
      <div className='col-span-1'>
        <div className=
          'fullName w-full border-2 h-full rounded-[5rem] shadow-xl bg-white inset-y-0 left-[48%] text-center pb-14'>
          <div className='bg-[#e45f20] h-[74px] text-center text-white rounded-t-[5rem] font-bold'>
            <p className=' text-5xl pt-8'>ĐĂNG KÝ NGAY</p>
          </div>

          <form className='mt-10 relative'>
            <input type='text' className=
              'w-[90%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
              onBlur={(e) => handleFullName(e)}
              placeholder='Họ và tên'></input>
          </form>
          {fullName && <span className='text-red-600 tablet:ml-56  mobile:ml-20 laptop:block left-0  absolute laptop:ml-36'>Họ và tên không hợp lệ !</span>}

          <div className=' mt-4 relative'>
            <form className=
              'flex w-[90%] mt-8 m-auto'
              onBlur={handleSubmit(onBlurs)}
            >
              <input type='email' className=
                'email w-full focus:outline-none checkEmail border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'

                placeholder='Email'
                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
              ></input>
            </form>
            {errors.email && <span className='text-red-600  laptop:block left-0 absolute ml-14'>Email không hợp lệ !</span>}


            <form className=
              'flex w-[90%] mt-8 m-auto'
              onBlur={handleSubmit(onBlurs)}
            >
              <input type='text' className=
                'phone w-full focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'

                placeholder='Số điện thoại'
                {...register("number", { required: true, pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g })}
              ></input>
            </form>
            {errors.number && <span className='text-red-600  laptop:block left-0 ml-14 absolute'>Số điện thoại không hợp lệ !</span>}
          </div>

          <div className='mt-8 w-[90%] m-auto'>
            <select className='w-full py-3 text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
              onBlur={(e) => setValue({ ...value, city: e.target.value })}
              onChange={() => setCity(false)}
              aria-label=".form-select-lg" name='citi' id='citi'>
              <option value=''>Chọn tỉnh thành</option>
            </select>
            {city && <span className='text-red-600 tablet:ml-56 tablet:mt-16 mobile:mt-16 mobile:ml-20 laptop:mt-0 laptop:block left-0 absolute laptop:ml-36'>Vui lòng chọn tỉnh thành</span>}
          </div>

          <div className='mt-8 m-auto w-[90%] tablet:ml-12'>
            <textarea className='w-full border-[1px] py-10 rounded-lg' id="form-body" name="body" placeholder="Nội dung cần tư vấn"></textarea>
            <p className='break-before-auto text-left font-light'>
              (*)Ví dụ: Công ty tôi đang kinh doanh quần áo trên các sàn và tự bán qua facebook. Tôi muốn mở rộng kinh doanh nên cần một bên có thể cung cấp các dịch vụ sau: kho chứa hàng, hệ thống quản lý hàng tồn, nhân viên xuất/nhập hàng. Tôi có khoảng 100 SKU (mỗi SKU khoảng 100 sản phẩm tồn kho), xuất nhập hàng liên tục. Mỗi tháng khoảng 10,000 đơn. Tôi cần tư vấn giá dịch vụ.
            </p>
          </div>

          <div className='mt-4'>
            <button onClick={handleSubmitForm} className=
              'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-8 p-3 py-3 z-[1] rounded-xl location tablet:w-[50%] text-white font-semibold hover:text-primary'
            >ĐĂNG KÝ NHẬN TƯ VẤN</button>
          </div>

        </div>
      </div>
      <div className='col-span-1'>
        <div className=
          'fullName w-full border-2 mobile:mt-6 laptop:mt-0 h-full rounded-[5rem] shadow-xl bg-white inset-y-0 left-[48%] text-center pb-14'>
          <div className='bg-[#00467f] tablet:h-[74px] text-center mobile:pb-6 tablet:pb-0 text-white rounded-t-[5rem] font-bold'>
            <p className=' text-5xl pt-8'>BẠN CÓ TÀI KHOẢN GHN ?</p>
          </div>
          <div className='mt-28'>
            <img className='w-[370px] h-[238px] m-auto' src="//theme.hstatic.net/200000472237/1000829412/14/bg-support-chuyenphat.jpg?v=502"></img>
          </div>
          <div className='mt-4'>
            <a href='https://sso.ghn.vn/v2/ssoLogin?app=import&returnUrl=https://khachhang.ghn.vn/sso-login?token='>
              <button className=
                'border-[1px] hover:border-[1px] bg-[#00467f] hover:border-[#00467f] border-[#00467f] mt-8 p-3 py-3 z-[1] rounded-xl location laptop:w-[50%] text-white font-semibold hover:text-[#00467f]'
              >ĐĂNG KÝ NHẬN TƯ VẤN</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

