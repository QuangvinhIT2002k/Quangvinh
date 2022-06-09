import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../styles/newsletter.css"

const Newsletter = () => {
  return (
    <div className='new-container'>
        <div className="new-row">
            <div className="new-col">
                <h2 className="new-title">Tin Khóa Học mới</h2>
                <p className="new-desc">Nhận cập nhật kịp thời từ ngôn ngữ lập trình yêu thích của bạn.</p>
                <div className="input-container">
                    <input type="text" placeholder='Your E-mail' />
                    <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
