import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

export default function Register() {

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
        formState: { errors },
    } = useForm();


    return (
        <div>
            <div className='relative'>


                <div>
                    <picture>
                        <source
                            srcSet='//theme.hstatic.net/200000472237/1000829412/14/banner-sv-chuyenphat.jpg?v=491'>
                        </source>
                        <img
                            alt='img'
                            src='//theme.hstatic.net/200000472237/1000829412/14/banner-sv-chuyenphat.jpg?v=491'>
                        </img>
                    </picture>
                </div>


                <div className='text-center tablet:ml-[0px]'>


                    <div
                        className=
                        'tablet:h-[46px] tablet:w-full mobile:ml-12 tablet:ml-[0px] laptop:w-[672px] mobile:h-[46px] mobile:w-[80%] inset-y-0  laptop:right-[26px] bg-primary z-10 rounded-t-[5rem] mt-14 text-white font-bold text-3xl laptop:absolute '>
                        <p className='laptop:mt-6 mobile:pt-4 laptop:pt-0'>
                            ????NG K?? NGAY
                        </p>
                    </div>


                    <form
                        onSubmit={handleSubmit((data) => console.log(data))}
                        className=
                        'fullName laptop:mt-28 mobile:w-[80%] dark:!bg-dark dark:text-white m-auto tablet:w-full laptop:ml-0 laptop:w-[50%] laptop:h-[76%] rounded-t-2xl rounded-b-[5rem] bg-white inset-y-0 laptop:left-[48%] laptop:absolute text-center'>
                        <div className='mt-10'>


                            <input
                                {...register('fullName', { required: true })}
                                name='fullName'
                                type='text'
                                className=
                                'w-[90%] dark:!bg-dark dark:text-white focus:outline-none focus:ring-0 text-xl focus:border-zinc-600 border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                placeholder='H??? v?? t??n'>
                            </input>

                            {
                                errors.fullName &&
                                <p className='italic mobile:text-xl tablet:text-2xl mobile:left-[14%] text-red-600 absolute tablet:left-[6%]'>
                                    Required value
                                </p>
                            }
                        </div>


                        <div className='flex w-[90%] mt-8 m-auto justify-between'>
                            <input
                                {...register('email', { required: true })}
                                name='email'
                                type='email'
                                id='email'
                                className=
                                'email w-[48%] dark:!bg-dark dark:text-white focus:outline-none focus:ring-0 text-xl focus:border-zinc-600 checkEmail border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                placeholder='Email'>
                            </input>
                            {
                                errors.email &&
                                <p className='italic mobile:text-xl tablet:text-2xl mobile:left-[14%] mt-14 text-red-600 absolute tablet:left-[6%]'>
                                    Required value
                                </p>
                            }

                            <input
                                {...register('phone', {
                                    required: true, pattern: {
                                        value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
                                    }
                                })}
                                name='phone'
                                type='number'
                                className=
                                'phone w-[48%] dark:!bg-dark dark:text-white focus:outline-none focus:ring-0 text-xl focus:border-zinc-600 border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                placeholder='S??? ??i???n tho???i'>
                            </input>

                            {
                                errors.phone &&
                                <p className='italic mobile:text-xl tablet:text-2xl mobile:left-[14%] mt-14 text-red-600 absolute tablet:left-[52%]'>
                                    Required value
                                </p>
                            }

                        </div>


                        <div className='mt-8 flex justify-around mx-2'>

                            <select
                                {...register('city', { required: true })}
                                name='city'
                                className=
                                'w-[25%] py-3 dark:!bg-dark dark:text-white text-[#7b7b7b] focus:outline-none focus:ring-0 text-xl focus:border-zinc-600 rounded-lg border-[#e9e9e9] border-2'
                                aria-label=".form-select-lg"
                                id='citi'>
                                <option value=''>
                                    Ch???n t???nh th??nh
                                </option>
                            </select>
                            {
                                errors.city &&
                                <p className='italic mobile:text-xl tablet:text-2xl mobile:left-[14%] mt-14 text-red-600 absolute tablet:left-[6%]'>
                                    Required value
                                </p>
                            }


                            <select
                                {...register('district', { required: true })}
                                name='district'
                                className=
                                'w-[25%] py-3 dark:!bg-dark dark:text-white text-[#7d7b7b] focus:outline-none focus:ring-0 text-xl focus:border-zinc-600  rounded-lg border-[#e9e9e9] border-2'
                                aria-label=".form-select-lg"
                                id='district'>
                                <option value=''>
                                    Ch???n qu???n huy???n
                                </option>
                            </select>

                            {
                                errors.district &&
                                <p className='italic mobile:hidden tablet:block mobile:text-xl tablet:text-2xl mobile:left-[14%] mt-14 text-red-600 absolute tablet:left-[38%]'>
                                    Required value
                                </p>
                            }

                            <select
                                {...register('ward', { required: true })}
                                name='ward'
                                className=
                                'w-[25%] py-3 dark:!bg-dark dark:text-white text-[#7b7b7b] focus:outline-none dark:!bg-dark dark:text-white focus:ring-0 text-xl focus:border-zinc-600 rounded-lg border-[#e9e9e9] border-2'
                                aria-label=".form-select-lg"
                                id='ward'>
                                <option value=''>
                                    Ch???n ph?????ng x??
                                </option>
                            </select>

                            {
                                errors.ward &&
                                <p className='italic mobile:hidden tablet:block mobile:text-xl tablet:text-2xl mobile:left-[14%] mt-14 text-red-600 absolute tablet:left-[70%]'>
                                    Required value
                                </p>
                            }

                        </div>
                        <div className='mt-8'>


                            <div className=''>
                                <input
                                    {...register('adress', { required: true })}
                                    name='adress'
                                    type='text'
                                    className='adress w-[90%] focus:outline-none dark:!bg-dark dark:text-white focus:ring-0 text-xl focus:border-zinc-600 border-[#e9e9e9] border-[1px] rounded-lg p-2 py-3'
                                    placeholder='?????a ch???(s??? nh??,t??n t??a nh??,t??n ???????ng,t??n khu v???c'>
                                </input>
                            </div>
                            {
                                errors.adress &&
                                <p className='italic mobile:text-xl tablet:text-2xl mobile:left-[14%] text-red-600 absolute tablet:left-[6%]'>
                                    Required value
                                </p>
                            }

                        </div>


                        <div className='mt-8'>


                            <select
                                {...register('older', { required: true })}
                                name='older'
                                className=
                                "oder dark:!bg-dark dark:text-white form-select text-[#868585] py-3 rounded-lg w-[90%] border-2 border-[#e9e9e9] focus:outline-none focus:ring-0 text-xl focus:border-zinc-600"
                                aria-label="Default select example">
                                <option
                                    value=''>
                                    S??? ????n trung b??nh m???i ng??y
                                </option>
                                <option
                                    value="D?????i 30 ????n/ng??y">
                                    D?????i 30 ????n/ng??y
                                </option>
                                <option
                                    value="T??? 30-150 ????n/ng??y">
                                    T??? 30-150 ????n/ng??y
                                </option>
                                <option
                                    value="Tr??n 150 ????n/ng??y">
                                    Tr??n 150 ????n/ng??y
                                </option>
                            </select>

                            {
                                errors.older &&
                                <p className='italic mobile:text-xl tablet:text-2xl mobile:left-[14%] text-red-600 absolute tablet:left-[6%]'>
                                    Required value
                                </p>
                            }

                        </div>


                        <div className='mt-4'>


                            <button
                                type="submit"
                                className=
                                'border-[1px] hover:border-[1px] hover:border-primary border-primary mt-8 p-3 py-3 z-[1] rounded-xl location tablet:w-[50%] text-white font-semibold hover:text-primary'>
                                ????NG K?? NH???N T?? V???N
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
