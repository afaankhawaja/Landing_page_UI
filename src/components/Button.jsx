import React from 'react'

const Button = ({children,className}) => {
  return (
    <span className={`${className|| ''} relative px-3 py-2 text-sm font-medium rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]`}>
            <div className="absolute inset-0">
              <div className="border  border-white/20 rounded-lg absolute inset-0 [mask-image:linear-gradinet(to_bottom,black,transparent)]"></div>
              <div className="border  border-white/40 rounded-lg absolute inset-0 [mask-image:linear-gradinet(to_top,black,transparent)]"></div>
              <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
            </div>
            <span className="">{children}</span>
          </span>
  )
}

export default Button