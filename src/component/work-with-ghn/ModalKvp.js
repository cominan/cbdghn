import React from 'react'
import { Link } from 'react-router-dom'
import './css/modalkvp.css'
export default function ModalKvp() {
    return (
        <div className='triangleModal'>
            <Link to='/pages/block/detail-hcm-ghn'
                className=
                'top-[18%] dark:!bg-dark dark:text-white right-0 bg-white absolute hover:no-underline rounded-xl tablet:w-[110%] shadow-xl py-2 border-[1px]'>
                <div className='grid grid-cols-7 w-full -mb-2 px-2 mt-2'>
                    <div className='col-span-6'>
                        <h3 className='text-[12px] font-semibold'>[GHN - HCM] HRBP TECH SPECIALIST</h3>
                        <p className='mt-1'>Hồ Chí Minh</p>
                    </div>
                    <div className='col-span-1 m-auto mb-12 text-xl py-1 px-2 bg-primary rounded-lg'>GẤP</div>
                </div>
            </Link>
        </div>
    )
}
