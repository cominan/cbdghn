import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { subport } from '../../../app/selector/dataCitySlice';

export default function Register() {

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
    useEffect(() => {
        const citis = document.getElementById('citi')
        const district = document.getElementById('district')
        const ward = document.getElementById('ward')



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


    const [adress, setAdress] = useState(false)
    const handlAdress = (e) => {
        if (e.target.value.length >= 1) {
            setAdress(false)
        } else {
            setAdress(true)
        }
        setValue({ ...value, adress: e.target.value })
    }




    const [city, setCity] = useState(false)
    const [district, setDistrict] = useState(false)
    const [ward, setWard] = useState(false)
    const [oder, setOder] = useState(false)



    const handleSubmitForm = (e) => {
        e.preventDefault()
        axios.post('https://appghn.herokuapp.com/informationUser', {
            fullname: value.fullName,
            email: value.email,
            phone: value.phone,
            city: value.city,
            destrict: value.district,
            ward: value.ward,
            adress: value.adress,
            averageOrder: value.averageOder
        }).then(res => {
            console.log(res.data)
        })

        if (value.adress === '') {
            setAdress(true)
        }
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
        <div>
            <div className='relative laptop:-ml-20 laptop:-mr-20'>
                <div>
                    <picture>
                        <source srcSet='//theme.hstatic.net/200000472237/1000829412/14/banner-sv-chuyenphat.jpg?v=491'></source>
                        <img src='//theme.hstatic.net/200000472237/1000829412/14/banner-sv-chuyenphat.jpg?v=491'></img>
                    </picture>
                </div>
                <div className='text-center tablet:ml-[0px]'>
                    <div
                        className=
                        'tablet:h-[46px] tablet:w-[600px] mobile:ml-12 tablet:ml-[0px] laptop:w-[676px] mobile:h-[46px] mobile:w-[80%] inset-y-0  laptop:right-[26px] bg-primary z-10 rounded-t-[5rem] mt-14 text-white font-bold text-3xl laptop:absolute '>
                        <p className='laptop:mt-6 mobile:pt-4 laptop:pt-0'>ĐĂNG KÝ NGAY</p>
                    </div>
                    <form
                        className=
                        'fullName laptop:mt-28 mobile:w-[80%] m-auto tablet:w-full  laptop:ml-0 laptop:w-[50%] laptop:h-[76%] rounded-t-2xl rounded-b-[5rem] bg-white inset-y-0 laptop:left-[48%] laptop:absolute text-center'>
                        <div className='mt-10'>
                            <input type='text' className=
                                'w-[90%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                onChange={(e) => setValue({ ...value, fullName: e.target.value })}
                                onBlur={(e) => handleFullName(e)}
                                placeholder='Họ và tên'></input>
                        </div>
                        {fullName && <span className='text-red-600 left-0 absolute ml-10'>Họ và tên không hợp lệ !</span>}
                        <div className=
                            'flex w-[90%] mt-8 m-auto justify-between'
                            onBlur={handleSubmit(onBlurs)}
                        >
                            <input type='email'
                                onChange={(e) => setValue({ ...value, email: e.target.value })}
                                className=
                                'email w-[48%] focus:outline-none checkEmail border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'

                                placeholder='Email'
                                {...register("email", { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                            ></input>
                            <input type='text'
                                onChange={(e) => setValue({ ...value, phone: e.target.value })}
                                className=
                                'phone w-[48%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'

                                placeholder='Số điện thoại'
                                {...register("number", { pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g })}
                            ></input>
                        </div>
                        {errors.email && <span className='text-red-600 left-0 absolute ml-10'>Email không hợp lệ !</span>}
                        {errors.number && <span className='text-red-600 mobile:hidden tablet:block right-0 absolute mr-10'>Số điện thoại không hợp lệ !</span>}
                        <div className='mt-8 flex justify-around mx-2'>
                            <select className=
                                'w-[25%] py-3 text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
                                onBlur={(e) => setValue({ ...value, city: e.target.value })}
                                onChange={() => setCity(false)}
                                aria-label=".form-select-lg" name='citi' id='citi'>
                                <option value=''>Chọn tỉnh thành</option>
                            </select>
                            {city && <span className='text-red-600 left-0 mt-16 absolute ml-10'>Vui lòng chọn tỉnh/thành phố</span>}
                            <select className=
                                'w-[25%] py-3 text-[#7d7b7b] focus:outline-none  rounded-lg border-[#e9e9e9] border-2'
                                onBlur={(e) => setValue({ ...value, district: e.target.value })}
                                onChange={() => setDistrict(false)}
                                aria-label=".form-select-lg" name='district' id='district'>
                                <option value=''>Chọn quận huyện</option>
                            </select>
                            {district && <span className='text-red-600 mobile:hidden tablet:block left-1/3 mt-16 absolute ml-10'>Vui lòng chọn quận/huyện</span>}

                            <select className=
                                'w-[25%] py-3 text-[#7b7b7b] focus:outline-none rounded-lg border-[#e9e9e9] border-2'
                                onBlur={(e) => setValue({ ...value, ward: e.target.value })}
                                onChange={() => setWard(false)}
                                aria-label=".form-select-lg" name='ward' id='ward'>
                                <option value=''>Chọn phường xã</option>
                            </select>
                            {ward && <span className='text-red-600 mobile:hidden laptop:block right-0 mt-16 absolute mr-16'>Vui lòng chọn phường/xã</span>}

                        </div>
                        <div className='mt-8'>
                            <div className=''>
                                <input type='text'
                                    onChange={(e) => setValue({ ...value, adress: e.target.value })}
                                    className='adress w-[90%] focus:outline-none border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                    onBlur={(e) => handlAdress(e)}
                                    placeholder='Địa chỉ(số nhà,tên tòa nhà,tên đường,tên khu vực'></input>
                            </div>
                            {adress && <span className='text-red-600 left-0 absolute ml-10'>Địa chỉ không hợp lệ</span>}

                        </div>
                        <div className='mt-8'>
                            <select className=
                                "oder form-select text-[#868585] py-3 rounded-lg w-[90%] border-2 border-[#e9e9e9] focus:outline-none"
                                onBlur={(e) => setValue({ ...value, averageOder: e.target.value })}
                                onChange={() => setOder(false)}
                                aria-label="Default select example">
                                <option value=''>Số đơn trung bình mỗi ngày</option>
                                <option value="Dưới 30 đơn/ngày">Dưới 30 đơn/ngày</option>
                                <option value="Từ 30-150 đơn/ngày">Từ 30-150 đơn/ngày</option>
                                <option value="Trên 150 đơn/ngày">Trên 150 đơn/ngày</option>
                            </select>
                            {oder && <span className='text-red-600 left-0 mt-16 absolute ml-10'>Vui lòng chọn số đơn trung bình !</span>}

                        </div>
                        <div className='mt-4'>
                            <button onClick={(e) =>handleSubmitForm(e)} className=
                                'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-8 p-3 py-3 z-[1] rounded-xl location tablet:w-[50%] text-white font-semibold hover:text-primary'
                            >ĐĂNG KÝ NHẬN TƯ VẤN</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}