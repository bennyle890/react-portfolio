import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './contact.css';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleSubmit = (e) => { 
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid. Please try a different email.');
            } else { 
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section className='reveal-element'>
            <h1 id='contact' className='contact'>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit} className='contact-form'>
                <div>
                    <label htmlFor='name' className='c-name'>Full Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} className='form-input'/>
                </div>
                <div>
                    <label htmlFor='email' className='c-name'>Email Address:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange} className='form-input'/>
                </div>
                <div>
                    <label htmlFor='message' className='c-name'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} className='form-input'/>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'><strong>{errorMessage}</strong></p>
                    </div>
                )}
                <button data-testid='button' type='submit'><strong>submit</strong></button>
            </form>
        </section>
    );
}

export default ContactForm;