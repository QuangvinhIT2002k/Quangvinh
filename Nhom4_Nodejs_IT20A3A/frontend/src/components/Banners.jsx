import { faArrowRightArrowLeft, faCheck, faPhoneVolume, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../styles/banners.css"

const Banners = () => {
  return (
    <div className='b-container'>
      <div className="b-row">
          <div className="b-col">
                <span>Khóa Học Chất Lượng Cao</span>
          </div>
          <div className="b-col">
                <span>Học Tập Nhanh Chóng</span>
          </div>
          <div className="b-col">
                <span>Tương Tác Trực Tiếp</span>
          </div>
          <div className="b-col">
                <span>Hổ Trợ 24/7</span>
          </div>
      </div>
    </div>
  )
}

export default Banners
