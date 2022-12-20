import React from 'react'
import GoToTop from '../frames/GotoTop'
import Contact from './contact/Contact'
import Desc from './Desc'

export default function Footer() {

  return (
    <div className='bg-[#fafafa] pt-12 px-48 dark:!bg-dark dark:text-white'>
      <Desc />
      <div className='laptop:block mobile:hidden tablet:hidden dark:!bg-dark dark:text-white'>
        <Contact />
        <GoToTop />

      </div>
    </div>
  )
}
