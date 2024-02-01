import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css'

function ContactForm() {

    const [state, handleSubmit] = useForm("xnqepayv");

    if (state.succeeded) {
        return <p>Gracias por ponerte en contacto</p>;
    }

    return (
        <div className="contactModal">
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <input
                        placeholder='Enter your email...'
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="message">
                    <textarea
                        placeholder='Enter your message...'
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm