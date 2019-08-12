import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FooterStyled, { FooterFirst, FooterSecond, Contact, Social } from './FooterStyled';
import Input from 'components/Input';
import Button from 'components/Button';
import H3 from '../H3/index';
import sendData from 'helpers/data/sendData.mjs';

const Footer = props => {
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [mailSent, setMailSent] = useState(null);

	const onChange = (name, value) => {
		switch (name) {
			case 'email':
				setEmail(value);
				break;
			case 'subject':
				setSubject(value);
				break;
			case 'message':
				setMessage(value);
				break;
		}
	};

	const submit = e => {
		e.preventDefault();
		const response = sendData('https://us-central1-psykolog-jenny.cloudfunctions.net/sendMail', {
			email: email,
			subject: subject,
			message: message,
			validate: 'not-a-robot'
		});
		setMailSent(response);
	};

	return (
		<FooterStyled {...props}>
			<FooterFirst>
				<Contact>
					<H3 mBot={20}>Kontakta mig!</H3>
					<form onSubmit={e => submit(e)}>
						<Input
							type="email"
							label="Din Email"
							name="email"
							value={email}
							darkBg
							onChange={e => onChange('email', e.target.value)}
							required
						></Input>
						<Input
							type="text"
							label="Ämne"
							name="subject"
							darkBg
							value={subject}
							onChange={e => onChange('subject', e.target.value)}
							required
						></Input>
						<Input
							textarea
							label="Meddelande ✍️"
							name="message"
							darkBg
							value={message}
							onChange={e => onChange('message', e.target.value)}
							required
						></Input>
						<Button type="submit">Skicka meddelande</Button>
					</form>
				</Contact>
				<Social>
					<a
						href="https://linkedin.com/in/jenny-ringdal-264b3390"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</Social>
			</FooterFirst>
			<FooterSecond>
				<span>
					Created with ♥ by{' '}
					<a href="https://twitter.com/iamjohnhult" target="_blank" rel="noopener noreferrer">
						@iamjohnhult
					</a>
				</span>
			</FooterSecond>
		</FooterStyled>
	);
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
