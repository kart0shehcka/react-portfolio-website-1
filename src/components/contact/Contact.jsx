
import React from 'react'
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi'
const Contact = () => {
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<HiOutlineMail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>kart0shechka.70@gmail.com</h5>
						<a href="mailto:kart0shechka.70@gmail.com" target='_blank'>Send a messege</a>
					</article>
					<article className="contact__option">
						<HiOutlineMail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>kart0shechka.70@gmail.com</h5>
						<a href="mailto:kart0shechka.70@gmail.com" target='_blank'>Send a messege</a>
					</article>
					<article className="contact__option">
						<HiOutlineMail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>kart0shechka.70@gmail.com</h5>
						<a href="mailto:kart0shechka.70@gmail.com" target='_blank'>Send a messege</a>
					</article>
				</div>
				{/* {END OF CONTACT OPTIONS} */}
				<form action="">
					<input type="text" name='name' placeholder='Your Full Name' required />
					<input type="email" name='email' placeholder='Your Email' required />
					<textarea name="message" rows="7" placeholder='Your massage' required></textarea>
					<button type='submit' className='btn btn-primary'>Send Message</button>
				</form>
			</div>
		</section>
	)
}

export default Contact