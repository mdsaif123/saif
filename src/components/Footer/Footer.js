import React from 'react'
import logo from "../../assets/images/logo1.png"

const Footer = () => {
  return (
    <div>
    <hr  className='text-white'/>
    <div className="container">
      <div className="row">
        <div className=" text-center">
          <img src={logo} style={{width:"200px"}} alt="" />
        </div>
        <div className="col-md-4">
          {/* <h5>Quick links</h5> */}
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Footer
