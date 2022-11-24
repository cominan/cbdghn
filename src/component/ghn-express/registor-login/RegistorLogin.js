import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { subport } from '../../../app/selector/dataCitySlice';

export default function RegistorLogin() {
    const [value, setValue] = useState({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        district: '',
        ward: '',
        adress: '',
        averageOder: ''
    })
    const dispatch = useDispatch()
    const Location = useSelector((state => state.city.initValue.all))

    //RENDER CITY
    useEffect(() => {
        const citis = document.getElementById('citi2')
        const district = document.getElementById('district2')
        const ward = document.getElementById('ward2')


        function renderCiti(data) {
            for (let x of data) {
                citis.options[citis.options.length] = new Option(x.Name, x.Id)
            }
            citis.onchange = function () {
                district.length = 1;
                ward.length = 1;
                if (this.value !== '') {
                    let result = data.filter(n => n.Id === this.value)
                    for (let y of result[0].Districts) {
                        district.options[district.options.length] = new Option(y.Name, y.Id)
                    }

                }
            }

            district.onchange = function () {
                ward.length = 1;
                const result = data.filter(n => n.Id === citis.value)
                if (this.value !== '') {
                    const resultDis = result[0].Districts.filter(n => n.Id === this.value)[0].Wards
                    for (let z of resultDis) {
                        ward.options[ward.options.length] = new Option(z.Name, z.Id)

                    }
                }

            }
        }
        renderCiti(Location)
    }, [Location])

    //HANDLE MIN LENGTH WITH ADRESS
    const [adress, setAdress] = useState(false)
    const handlAdress = (e) => {
        if (e.target.value.length >= 1) {
            setAdress(false)
        } else {
            setAdress(true)
        }
        setValue({ ...value, adress: e.target.value })
    }

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
    const [district, setDistrict] = useState(false)
    const [ward, setWard] = useState(false)
    const [oder, setOder] = useState(false)
    const handleSubmitForm = () => {
        if (value.fullName === '') {
            setFullName(true)
        }
        if (value.adress === '') {
            setAdress(true)
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
        if (value.district === '') {
            setDistrict(true)
        }
        if (value.ward === '') {
            setWard(true)
        }
        if (value.averageOder === '') {
            setOder(true)
        }
        !fullName && !adress && !errors.email && !errors.number && !city && !ward && !district && !oder && dispatch(subport(value)) &&
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
                    {fullName && <span className='text-red-600 left-0 mt-2 absolute ml-32'>Họ và tên không hợp lệ !</span>}

                    <div className='flex justify-around mt-4 relative'>

                        <form className=
                            'flex w-[90%] mt-8 m-auto justify-between'
                            onBlur={handleSubmit(onBlurs)}
                        >
                            <input type='email' className=
                                'email w-[48%] focus:outline-none checkEmail border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'

                                placeholder='Email'
                                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                            ></input>
                            <input type='text' className=
                                'phone w-[48%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'

                                placeholder='Số điện thoại'
                                {...register("number", { required: true, pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g })}
                            ></input>
                        </form>
                        {errors.email && <span className='text-red-600 mt-24 left-0 absolute ml-14'>Email không hợp lệ !</span>}
                        {errors.number && <span className='text-red-600 mt-24 left-1/2 ml-6 absolute'>Số điện thoại không hợp lệ !</span>}
                    </div>

                    <div className='mt-8 flex justify-around mx-2'>

                        <select className='w-[25%] block py-3 text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
                            onBlur={(e) => setValue({ ...value, city: e.target.value })}
                            onChange={() => setCity(false)}
                            aria-label=".form-select-lg" name='citi' id='citi2'>
                            <option value=''>Chọn tỉnh thành</option>
                        </select>
                        {city && <span className='text-red-600 left-0 mt-16 absolute ml-32'>Vui lòng chọn tỉnh thành</span>}

                        <select className='w-[25%] block py-3 text-[#7d7b7b] focus:outline-none  rounded-lg border-[#e9e9e9] border-2'
                            onBlur={(e) => setValue({ ...value, district: e.target.value })}
                            onChange={() => setDistrict(false)}
                            aria-label=".form-select-lg" name='district' id='district2'>
                            <option value=''>Chọn quận huyện</option>
                        </select>
                        {district && <span className='text-red-600 left-[1/8] mt-16 absolute ml-6'>Vui lòng chọn quận/huyện</span>}

                        <select className='w-[25%] block py-3 text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
                            onBlur={(e) => setValue({ ...value, ward: e.target.value })}
                            onChange={() => setWard(false)}
                            aria-label=".form-select-lg" name='ward' id='ward2'>
                            <option value=''>Chọn phường xã</option>
                        </select>
                        {ward && <span className='text-red-600 left-1/3 mt-16 ml-16 absolute'>Vui lòng chọn phường/xã</span>}

                    </div>

                    <div className='mt-8'>
                        <form className=''>
                            <input type='text' className='adress w-[90%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                onBlur={(e) => handlAdress(e)}
                                placeholder='Địa chỉ(số nhà,tên tòa nhà,tên đường,tên khu vực'></input>
                        </form>
                        {adress && <span className='text-red-600 left-0 absolute ml-32'>Địa chỉ không hợp lệ</span>}

                    </div>
                    <div className='mt-8'>
                        <select className="oder form-select text-[#868585] py-3 rounded-lg w-[90%] border-2 border-[#e9e9e9] focus:outline-none"
                            onBlur={(e) => setValue({ ...value, averageOder: e.target.value })}
                            onChange={() => setOder(false)}
                            aria-label="Default select example">
                            <option value=''>Số đơn trung bình mỗi ngày</option>
                            <option value="Dưới 30 đơn/ngày">Dưới 30 đơn/ngày</option>
                            <option value="Từ 30-150 đơn/ngày">Từ 30-150 đơn/ngày</option>
                            <option value="Trên 150 đơn/ngày">Trên 150 đơn/ngày</option>
                        </select>
                        {oder && <span className='text-red-600 left-0 mt-16 absolute ml-32'>Vui lòng chọn số đơn trung bình !</span>}

                    </div>


                    <div className='mt-4'>
                        <button onClick={handleSubmitForm} className=
                            'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-8 p-3 py-3 z-[1] rounded-xl location tablet:w-[50%] text-white font-semibold hover:text-primary'
                        >ĐĂNG KÝ NHẬN TƯ VẤN</button>
                    </div>

                </div>
            </div>
            <div className='col-span-1 mobile:mt-10 laptop:mt-0'>
                <div className=
                    'fullName w-full border-2 h-full rounded-[5rem] shadow-xl bg-white inset-y-0 left-[48%] text-center pb-14'>
                    <div className='bg-[#00467f] laptop:h-[74px] text-center text-white rounded-t-[5rem] font-bold'>
                        <p className=' text-5xl mobile:pb-4 laptop:pb-0 pt-8'>BẠN CÓ TÀI KHOẢN GHN ?</p>
                    </div>
                    <div className='mt-28'>
                        <img className='w-[370px] h-[238px] m-auto' src="//theme.hstatic.net/200000472237/1000829412/14/bg-support-chuyenphat.jpg?v=502"></img>
                    </div>
                    <div className='mt-4'>
                        <a href='https://sso.ghn.vn/v2/ssoLogin?app=import&returnUrl=https://khachhang.ghn.vn/sso-login?token='>
                            <button className=
                                'border-[1px] hover:border-[1px] bg-[#00467f] hover:border-[#00467f] border-[#00467f] mt-8 p-3 py-3 z-[1] rounded-xl location tablet:w-[50%] text-white font-semibold hover:text-[#00467f]'
                            >ĐĂNG KÝ NHẬN TƯ VẤN</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
