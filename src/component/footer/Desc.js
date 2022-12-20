import React from 'react'
import DescGhn from './desc/DescGhn'
import DescLocation from './desc/DescLocation'

export default function Desc() {
  return (
    <div className=''>
      <DescGhn />
      <div className='laptop:block tablet:hidden'>
        <DescLocation />
      </div>
    </div>
  )
}
