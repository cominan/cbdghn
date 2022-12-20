import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './css/recruit.css'
import InformationRecruit from './InformationRecruit';
import QuickWorkContact from './QuickWorkContact';
import SearchWork from './SearchWork';

export default function Recruit() {
    return (
        <div className='laptop:mt-40 mobile:mt-56 bg-[#fff] mb-20 dark:!bg-dark dark:text-white'>
           <SearchWork />
            <div className='mt-32 laptop:flex mx-2 flex-auto relative'>
                <InformationRecruit />
                <QuickWorkContact />
            </div>
        </div>
    )
}
