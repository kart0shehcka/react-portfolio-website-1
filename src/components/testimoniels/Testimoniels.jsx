import React from 'react'
import './testimoniels.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
	{
		avatar: AVTR1,
		name: 'John Snow',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda amet a placeat natus, voluptates enim magnam voluptate vero quasi blanditiis fuga laboriosam. Repellat, ipsa qui debitis ut quae sapiente.'
	},
	{
		avatar: AVTR2,
		name: 'John Snow',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda amet a placeat natus, voluptates enim magnam voluptate vero quasi blanditiis fuga laboriosam. Repellat, ipsa qui debitis ut quae sapiente.'
	},
	{
		avatar: AVTR3,
		name: 'John Snow',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda amet a placeat natus, voluptates enim magnam voluptate vero quasi blanditiis fuga laboriosam. Repellat, ipsa qui debitis ut quae sapiente.'
	},
	{
		avatar: AVTR4,
		name: 'John Snow',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda amet a placeat natus, voluptates enim magnam voluptate vero quasi blanditiis fuga laboriosam. Repellat, ipsa qui debitis ut quae sapiente.'
	},
];


const Testimoniels = () => {
	return (
		<section id='testimoniels'>
			<h5>Review from clients</h5>
			<h2>Testomonials</h2>

			<Swiper className="container testimonials__container"
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
			>
				{
					data.map(({ avatar, name, review }, index) => {
						return (
							<SwiperSlide className="testimonial">
								<div className="client__avatar">
									<img src={avatar} alt="avatar one" />
								</div>
								<h5 className='client__name'>{name}</h5>
								<small className='client__review'>{review}</small>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</section>
	)
}

export default Testimoniels