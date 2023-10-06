
import React from 'react'
import BannerImgHome from '../../assets/images/BannerHome.webp'
import BannerImgAbout from '../../assets/images/BannerAbout.webp'
import "./Banner.sass"
function Banner({ page, content }) {
    const imgSource = page === "home" ? BannerImgHome : BannerImgAbout
    return (
      <div className="banner">
        <img src={imgSource} className='banner__image'></img>
        <div className='banner__content'>
            <p>{content}</p>
        </div>
      </div>
    )
  }
  
  export default Banner
  