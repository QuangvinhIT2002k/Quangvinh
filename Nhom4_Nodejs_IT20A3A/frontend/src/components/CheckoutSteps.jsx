import React from 'react'
import '../styles/checkoutsteps.css'

const CheckoutSteps = (props) => {
  return (
    <div className="checkout-steps">
        <p className={props.step1 ? 'active' : ''}>Sign-In</p>
        <p className={props.step2 ? 'active' : ''}>Đang Xử lý</p>
        <p className={props.step3 ? 'active' : ''}>Thanh Toán</p>
        <p className={props.step4 ? 'active' : ''}>Mua Khóa Học</p>
    </div>
  )
}

export default CheckoutSteps