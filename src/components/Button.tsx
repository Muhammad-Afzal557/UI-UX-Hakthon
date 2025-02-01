import { ButtonProps } from './type'

import React from 'react'

const Button = (props:ButtonProps) => {
  console.log(props);
  
  return (
    <div>
      <button className=' bg-customOrange p-2 pl-7 pr-7 mt-7 rounded-[100px] text-sm'>{props.title}</button>
    </div>
  )
}

export default Button
