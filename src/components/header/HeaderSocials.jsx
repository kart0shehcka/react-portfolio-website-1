import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href="https://www.linkedin.com/in/rodion-medvedev-b359061a1/" target="_blank"><BsLinkedin /></a>
			<a href="https://github.com/kart0shehcka" target="_blank"><FaGithub /></a >
		</div >
	)
}

export default HeaderSocials