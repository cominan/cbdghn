import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { subport } from '../../../../../../app/selector/dataCitySlice'
import './RegistorForSale.css'

export default function RegistorForSale() {
    const [value, setValue] = useState({
        fullName: '',
        phone: '',
        city: '',
    })
    const dispatch = useDispatch()
    const Location = useSelector((state => state.city.initValue.all))

    //RENDER CITY
    useEffect(() => {
        const citis = document.getElementById('citi5')
        function renderCiti(data) {
            for (let x of data) {
                citis.options[citis.options.length] = new Option(x.Name, x.Id)
            }

            citis.onchange = function () {

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

        if (value.phone === '') {
            errors.number = true
        }
        if (value.city === '') {
            setCity(true)
        }

        !fullName && !errors.number && !city && dispatch(subport(value)) &&
            alert('Cám ơn bạn đã liên hệ! Chúng tôi sẽ trả lời bạn ngay khi có thể')

    }

    return (
        <div className=
            'fullName w-full border-2 h-full rounded-[5rem] shadow-xl bg-white inset-y-0 left-[48%] text-center pb-14'>
            <div className='bg-[#e45f20] h-[74px] text-center text-white rounded-t-[5rem] font-semibold'>
                <p className=' text-5xl pt-8'>GHN Gọi cho tôi</p>
            </div>
            <form className='mt-10 relative'>
                <input type='text' className=
                    'w-[90%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                    onBlur={(e) => handleFullName(e)}
                    placeholder='Họ và tên'></input>
            </form>
            {fullName && <span className='text-red-600 tablet:left-1/2 mobile:left-0 mt-4 absolute tablet:ml-12 mobile:ml-20'>Họ và tên không hợp lệ !</span>}
            <div className='flex justify-around mt-4 relative'>
                <form className='w-1/2 mt-8'
                    onBlur={handleSubmit(onBlurs)}
                >
                    <input type='text' className=
                        'phone w-[80%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'

                        placeholder='Số điện thoại'
                        {...register("number", { required: true, pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g })}
                    ></input>
                </form>
                {errors.number && <span className='text-red-600 left-0 absolute -bottom-[35px] tablet:ml-12 mobile:ml-8'>
                    Số điện thoại không hợp lệ !</span>}
                <div className='mt-8 w-1/2 flex relative mx-2'>
                    <select className=
                        'py-3 w-[80%] text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
                        onBlur={(e) => setValue({ ...value, city: e.target.value })}
                        onChange={() => setCity(false)}
                        aria-label=".form-select-lg" name='citi' id='citi5'>
                        <option value=''>Chọn tỉnh thành</option>
                    </select>
                    {city && <span className=
                        'text-red-600 left-0 mt-20 laptop:block mobile:hidden absolute'>Vui lòng chọn tỉnh/thành phố</span>}

                </div>
            </div>
            <div className='text-left ml-12 relative mt-14'>
                <p className='font-semibold'>Số lượng đơn dự kiến/tháng</p>
                <label className=
                    "form-check flex relative justify-between checkmar border-2 items-center rounded-lg pr-3">
                    <p className="form-check-label text-[#999] font-normal pl-6 py-3">
                        Dưới 400 đơn/tháng
                    </p>
                    <input onChange={() => console.log('1')}
                        className="form-check-input toggle_input w-[20px] h-[20px]"
                        value='dưới 400 đơn/tháng' name='radio' checked type="radio" />
                    <span className='toggle_label'></span>
                </label>
                <label className=
                    "form-check flex justify-between relative checkmar items-center border-2 rounded-lg mt-4 pr-3">
                    <p className="form-check-label text-[#999] font-normal pl-6 py-3">
                        Từ 400 đơn/tháng trở lên
                    </p>
                    <input className="form-check-input toggle_input w-[20px] h-[20px]"
                        name='radio' type="radio" value='từ 400 đơn/tháng trở lên' />
                    <span className='toggle_label'></span>
                </label>
            </div>
            <div className='mt-4'>
                <button onClick={handleSubmitForm} className=
                    'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-8 p-3 py-3 z-[1] rounded-xl location laptop:w-[50%] text-white font-semibold hover:text-primary'
                >ĐĂNG KÝ NHẬN TƯ VẤN</button>
            </div>


        </div>
    )
}