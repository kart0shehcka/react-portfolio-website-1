import React from 'react';
import './about.css';
import Me from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import { VscFolderActive } from 'react-icons/vsc'
const About = () => {
	return (
		<section id='about'>
			<h5>Get to Know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={Me} alt="about__me" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className='about__card'>
							<BsAward className='about__icon' />
							<h5>Experience</h5>
							<small>1+ Year</small>
						</article>

						<article className='about__card'>
							<FaUserSecret className='about__icon' />
							<h5>Clients</h5>
							<small>5 Happy Clients</small>
						</article>

						<article className='about__card'>
							<VscFolderActive className='about__icon' />
							<h5>Projects</h5>
							<small>15+ Completed</small>
						</article>
					</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, maiores dignissimos! Nesciunt, quos, quis perferendis id eos nihil assumenda voluptates non modi rerum cumque incidunt veniam. Vitae voluptatum deleniti molestiae!
					</p>

					<a href="#contact" className='btn btn-primary'>Let's Talk</a>
				</div>
			</div>
		</section>
	)
}

export default About