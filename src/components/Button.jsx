import React from 'react'

const Button = ({bgColor,color,size,text,borderRadius}) => {
  return (
    <div>
      <button type='' className={`text-${size} p-3 hover:drop-shadow-xl`} style={{backgroundColor:bgColor,color:color,borderRadius:borderRadius}} >
        {text}
      </button>
    </div>
  )
}

export default Button;