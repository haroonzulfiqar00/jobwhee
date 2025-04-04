"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Dropdown from 'react-bootstrap/Dropdown';

const Herosec = () => {
  return (
    <>
    <div className='my-4 hero-sec'>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide><img className='w-100' src="/images/banner-img.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-100' src="/images/banner-img.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-100' src="/images/banner-img.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-100' src="/images/banner-img.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-100' src="/images/banner-img.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-100' src="/images/banner-img.png" alt="" /></SwiperSlide>
    </Swiper>

    <div className='hero-sec-text1'>
        <h2>Find the talent <span>sign up</span> <br />
        & get The <span>job</span>  done </h2>
    </div>
    <div className='hero-sec-text2'>
        <h2>We`ll<span>handle</span> that</h2>
        <div className='text-center'>
        <p>Sign Up for Contract</p>
        <img className='px-2' src="/images/play-btn.png" alt="" />
        </div>
    </div>
    <div className='hero-sec-text3'>
        <div className='d-flex'>
        <input type="search" placeholder='Find a job, talent or service' />
        <Dropdown className='dropdown-search' >
        <Dropdown.Toggle id="dropdown-button-dark-example1" className='dropdown-search' variant="secondary">
        Talent
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>
          Talent
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Talent</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Client</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </div>
        <h3 className=''>Education and Tutoring</h3>
    </div>

    </div>
    
  </>
  )
}

export default Herosec