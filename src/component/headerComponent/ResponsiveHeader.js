
import 'flowbite';
import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';


export default function ResponsiveHeader() {
    const redirect = useNavigate()

    return (
        <div className='laptop:hidden mobile:block'>
            <div className='flex items-center justify-between mx-auto'>
                <div>
                    <button type="button"
                        id="multiLevelDropdownButton"
                        data-dropdown-toggle="dropdown"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false">
                        <AiOutlineMenu style={{ fontSize: '28px' }} />
                    </button>
                    {/* Dropdown menu */}
                    <div id="dropdown"
                        className="hidden z-10 tablet:w-[40%] h-[50vh] dark:bg-dark dark:text-white modalTablet mobile:w-[40%] bg-white rounded shadow">
                        <ul
                            className="text-xl text-left text-gray-700 dark:text-gray-200"
                            aria-labelledby="multiLevelDropdownButton">
                            <li className='px-4 py-2 text-xl text-left'>
                                <NavLink className='hover:no-underline'
                                    to='/'>
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li>
                                <button id="doubleDropdownButton"
                                    data-dropdown-toggle="doubleDropdown"
                                    data-dropdown-placement="right-start" type="button"
                                    className="flex border-t-[1px] justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Dịch vụ
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4"
                                        fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div id="doubleDropdown"
                                    className="hidden z-10 tablet:w-[50%] modalTablet mobile:w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">

                                    <ul
                                        className="text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="doubleDropdownButton">
                                        {[
                                            ["GHN EXPRESS", "/ghn-express"],
                                            ["GHN FULFILMENT", "/ghn-fullfilment"],
                                            ["AHAMOVE", "#"]
                                        ].map(([title, url], index) => (
                                            <NavLink key={index} className='hover:no-underline' to={url}>
                                                <li className='p-6 border-t-[1px] text-2xl text-left'>
                                                    {title}
                                                </li>
                                            </NavLink>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li
                                className="block py-2 border-t-[1px] px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Tin tức
                            </li>

                            <li>
                                <button id="doubleDropdownButton"
                                    data-dropdown-toggle="doubleDropdownservice"
                                    data-dropdown-placement="right-start" type="button"
                                    className="flex justify-between border-t-[1px] items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Thêm thông tin
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4"
                                        fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div id="doubleDropdownservice"
                                    className="hidden z-10 tablet:w-[50%] modalTablet mobile:w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">

                                    <ul
                                        className="text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="doubleDropdownButton">
                                        {[
                                            ["VỀ GHN", "/pages/ve-ghn"],
                                            ["PROFILE GHN", "#"],
                                            ["BẢNG GIÁ", "/pages/table-price"],
                                            ["CÔNG NGHỆ", "/pages/technolgy-ghn"],
                                            ["BƯu CỤC", "#"],
                                            ["LIÊN HỆ", "/pages/contact-ghn"],
                                            ["GHN XU", "/pages/xu-ghn"],
                                            ["TUYỂN DỤNG", "/pages/work-ghn"],
                                            ["TÍP BÁN HÀNG", "#"],
                                        ].map(([title, url], index) => (
                                            <li key={index} className='p-6 border-t-[1px] text-2xl text-left'>
                                                <NavLink
                                                    className='hover:no-underline'
                                                    to={url}>
                                                    {title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div className='bg-primary p-4'>
                            <p>ĐĂNG KÝ DỊCH VỤ</p>
                        </div>
                        <ul className='text-left mt-4'>
                            <li className='p-2'>-Chính sách bồi thường</li>
                            <li className='p-2'>-Quy định về khiếu nại</li>
                            <li className='p-2'>-Điều khoản sử dụng</li>
                            <li className='p-2'>-Chính sách bảo mật</li>
                        </ul>
                        <span className='bg-[#e1e1e1] pl-4 flex items-center py-4 dark:bg-dark dark:text-white'>
                            <BsTelephonePlus />
                            <p className='ml-4 font-bold'>
                                1900 636677
                            </p>
                        </span>
                        <div className='mt-3'>
                            <button
                                onClick={() => redirect('/registor')}
                                className='bg-primary p-4'>
                                Đăng ký/đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    itemProp="logo"
                    src="//theme.hstatic.net/200000472237/1000829412/14/logo.png?v=512"
                    alt="GHN.VN"
                    className='h-[85px] w-[150px]'>
                </img>
            </div>
        </div>
    )
}
