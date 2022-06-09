import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='f-container'>
        <div className="f-row">
          <div className="f-col">
            <img src="/images/logo/logo.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, nesciunt! Ipsum repellat saepe, similique magnam aut ducimus eveniet nobis ut sunt neque harum consequatur.</p>
          </div>
          <div className="f-col">
            <h2>đường dẫn nhanh</h2>
            <ul>
              <li>
                <NavLink to="/">Trang Chủ</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Khóa Học</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h2>Loại Khóa Học</h2>
            <ul>
              <li>
                <NavLink to="/">Javascript</NavLink>
              </li>
              <li>
                <NavLink to="/">Mongodb</NavLink>
              </li>
              <li>
                <NavLink to="/">Reactjs</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h2>Hãy giữ liên lạc với chúng tôi</h2>
            <div className="socials">
                <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
                <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                <a href="/"><img src="/images/socials/youtube.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="f-copyrow">
            <p>&copy; 2022. All Rights Reserved. Powered by BisuUDY.</p>
        </div>
    </div>
  )
}

export default Footer