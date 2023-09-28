
import React from 'react'
import BannerImgHome from '../../assets/images/BannerHome.svg'
import BannerImgAbout from '../../assets/images/BannerAbout.svg'
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
  