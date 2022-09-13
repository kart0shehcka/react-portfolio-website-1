import React from 'react'
import "./nav.css"
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { GiSecretBook } from 'react-icons/gi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { IoMdContacts } from 'react-icons/io'

import { useState } from 'react'
const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ''}><AiOutlineHome /></a>
			<a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "active" : ''}><AiOutlineUser /></a>
			<a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? "active" : ''}><GiSecretBook /></a>
			<a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? "active" : ''}><MdOutlineDesignServices /></a>
			<a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ''}><IoMdContacts /></a>
		</nav>
	)
}

export default Nav