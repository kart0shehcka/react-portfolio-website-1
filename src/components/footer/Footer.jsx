import React from 'react'
import './footer.css'
import { BsTelegram } from 'react-icons/bs'
const Footer = () => {
	return (
		<footer>
			<a href="#" className='footer__logo'>KART0SHECHKA</a>
			<ul className='permalinks'>
				<li><a href="#">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#services">Serveces</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>

			<div className="footer__socials">
				<a href="#"><BsTelegram /></a>
				<a href="#"><BsTelegram /></a>
				<a href="#"><BsTelegram /></a>
			</div>

			<div className="footer__copyright">
				<small></small>
			</div>
		</footer>
	)
}

export default Footer