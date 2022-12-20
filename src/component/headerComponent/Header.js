import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../app/firebase/configfb';
import { user } from '../../app/selector';
import ButtonDarkMode from '../frames/ButtonDarkMode';
import ResponsiveHeader from './ResponsiveHeader';
import './header.css';



export default function Header() {

    const [hideenModal, setHiddenModal] = useState(false)
    const redirect = useNavigate()

    let users = useSelector(user)

    const handleLogout = () => {

        signOut(auth)
            .then(() => redirect('/registor'))
            .catch(() => console.log('Logout failed'))

    }




    return (
        <div className='h-[86px] w-full fixed z-20 top-0'>
            <nav className="bg-white dark:!bg-dark">
                <div className="flex px-14 justify-center items-center">
                    <div className='laptop:flex items-center mobile:hidden'>
                        <div className="navbar-header laptop:block mobile:hidden max-w-[14%]">
                            <img alt='bg' src='//theme.hstatic.net/200000472237/1000829412/14/logo.png?v=491'></img>
                        </div>
                        <ul className="nav navbar-nav laptop:block items-center text-center">
                            <li className=' dark:!bg-dark'>
                                <NavLink
                                    className=
                                    'hover:border-b-primary dark:!bg-dark dark:text-white border-transparent bg-white text-black hover:bg-zinc-900 font-semibold text-2xl hover:text-primary border-b-2'
                                    to="/">
                                    TRANG CHỦ
                                </NavLink>
                            </li>
                            <li
                                className=
                                "icon-transform leading-8 dropdown border-b-primary hover:text-primary hover:border-b-0 text-2xl"
                                to="#">
                                <div className='inline-flex items-end mt-6 hover:text-primary'>
                                    <p className='mr-2 font-semibold'>DỊCH VỤ</p>
                                    <span className=''><ion-icon
                                        style={{ fontSize: '12px' }}
                                        name="chevron-down-outline">
                                    </ion-icon>
                                    </span>
                                </div>

                                <ul className='dropdown-menu p-6 dark:!bg-dark'>
                                    <div className='row w-[600px] container h-[298px]'>
                                        <div className='text-center h-[152px] grid grid-cols-2 gap-2'>
                                            {[
                                                ["GHN EXPRESS", "Dịch vụ giao hàng thương mại  điện tử, giao nhanh toàn quốc, hộ COD, miễn phí giao lại, miễn phí trả hàng.", "imgGhn bg-ghn", "/ghn-express"],
                                                [" GHN FULFILLMENT", " Dịch vụ kho bãi và xử lý hàng hóa, diện tích kho bãi hơn 100.000m2 giúp bạn tối ưu nhu cầu xuất-nhập-tồn kho.", "imgGhn bg-ghn", "/ghn-fullfilment"],
                                                ["AHAMOVE", "Dịch vụ giao hàng tức thời 30 phút - 4 giờ trong nội thành Hồ Chí Minh và Hà Nội.", "imgGhn bg-ahamove", "https://www.ahamove.com/"],
                                            ].map(([title, desc, background, url], index) => (
                                                <div
                                                    key={index}
                                                    className=
                                                    'p-2 pt-8 col-span-1 h-full border-[1px] border-x-primary border-y-primary'>
                                                    <NavLink
                                                        className='flex hover:no-underline'
                                                        to={url}>
                                                        <div
                                                            style={{ width: '100px' }}
                                                            className={background}></div>
                                                        <div className='pl-4 text-left'>
                                                            <h2
                                                                className='pb-4 text-2xl font-semibold text-[#00467f]'>
                                                                {title}
                                                            </h2>
                                                            <p
                                                                style={{ whiteSpace: 'pre-line' }}
                                                                className='leading-10 tracking-wide dark:text-white text-black hover:text-primary'>
                                                                {desc}
                                                            </p>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <NavLink
                                    className='border-b-primary dark:!bg-dark dark:text-white bg-white text-black hover:bg-zinc-900 font-semibold text-2xl hover:text-primary hover:border-b-2'
                                    to="#">
                                    TIN TỨC
                                </NavLink>
                            </li>

                            <li
                                className=
                                "font-semibold mt-6 text-2xl icon-transform dropdown hover:shadow-orange-500 border-b-primary hover:border-b-0"
                                to="#">
                                <div className='inline-flex hover:text-primary '>
                                    <p className='mr-2'>THÊM THÔNG TIN</p>
                                    <span className=''>
                                        <ion-icon
                                            style={{ fontSize: '12px' }}
                                            name="chevron-down-outline">
                                        </ion-icon>
                                    </span>
                                </div>
                                <ul className='dropdown-menu dark:!bg-dark dark:text-white'>
                                    <div className='row w-[352px] pl-6'>
                                        <div className='col-sm-6'>
                                            <ul className='font-normal text-2xl'>
                                                {[
                                                    ["VỀ GHN", "/pages/ve-ghn"],
                                                    ["PROFILE GHN", "#"],
                                                    ["BẢNG GIÁ", "/pages/table-price"],
                                                    ["CÔNG NGHỆ", "/pages/technolgy-ghn"],
                                                    ["BƯU CỤC", "#"],
                                                ].map(([title, url], index) => (
                                                    <li key={index} className='py-4'>
                                                        <NavLink
                                                            className='hover:no-underline dark:!bg-dark dark:text-white !bg-white text-black hover:!text-primary'
                                                            to={url}>
                                                            {title}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='col-sm-6  dark:!bg-dark dark:text-white'>
                                            <ul className='font-normal text-2xl'>
                                                {[
                                                    ["LIÊN HỆ", "/pages/contact-ghn"],
                                                    ["GHN XU", "/pages/xu-ghn"],
                                                    ["TUYỂN DỤNG", "/pages/work-ghn"],
                                                    ["TÍP BÁN HÀNG", "#"],
                                                ].map(([title, url], index) => (
                                                    <li key={index} className='py-4'>
                                                        <NavLink
                                                            className='hover:no-underline !bg-white dark:!bg-dark dark:text-white text-black hover:!text-primary'
                                                            to={url}>
                                                            {title}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div >
                                </ul >
                            </li>
                        </ul >
                    </div >



                    <div
                        className=
                        'laptop:flex w-full laptop:items-center tablet:pt-6 mobile:pt-6 laptop:pb-10 text-center'>
                        {users !== null ?

                            <div className='flex w-[250px] items-center relative'>
                                {
                                    users.photoURL ?
                                        <img
                                            alt='img'
                                            className='rounded-full w-[40px] h-[40px] mr-2'
                                            src={users.photoURL}></img>
                                        :
                                        <p className='mr-2 text-2xl font-medium'>Xin chào</p>
                                }
                                <p className='font-medium text-2xl mr-2'>{users.displayName}</p>
                                <button
                                    onClick={() => setHiddenModal(!hideenModal)}
                                    className='mt-2'>
                                    <AiFillCaretDown />
                                </button>
                                {hideenModal ?
                                    <div className='absolute top-16 bg-white px-2 border-2 mobile:right-0 tablet:left-40'>
                                        <ul>
                                            <NavLink to='/'>
                                                <li
                                                    className='hover:cursor-pointer'>
                                                    Thêm thông tin
                                                </li>
                                            </NavLink>
                                            <li
                                                onClick={handleLogout}
                                                className='border-t-2 hover:cursor-pointer'>
                                                Đăng xuất
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    ''
                                }
                            </div> :

                            <div className='laptop:flex items-center'>
                                <NavLink to='/registor' className='hover:no-underline mobile:hidden laptop:block'>
                                    <button
                                        className='btn primary mr-2'>
                                        Đăng ký/Đăng nhập
                                    </button>
                                </NavLink>
                                <div className='flex'>
                                    <div
                                        className=
                                        'flex-auto flex border-2 laptop:w-[200px] p-2 rounded-xl'>
                                        <input className='focus:outline-none w-full  dark:!bg-dark dark:text-white'></input>
                                        <NavLink
                                            to='/pages/notification' className='text-4xl'>
                                            <AiOutlineSearch />
                                        </NavLink>
                                    </div>
                                    <div className=
                                        'flex-none mobile:absolute laptop:relative ml-2 mobile:right-2 laptop:right-0 mt-2'>
                                        <ButtonDarkMode />
                                    </div>
                                </div>
                            </div>
                        }
                        <ResponsiveHeader />
                    </div>
                </div >
            </nav >
        </div >
    )
}
