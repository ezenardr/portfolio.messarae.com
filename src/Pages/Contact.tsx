import React, { useState } from 'react'

const Contact = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        topic: '',
        message: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    document.title = "Contact | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <div className="mosso-fn-wrapper">
                <div className="mosso_fn_contact_page">
                    <div className="mosso_fn_pagetitle">
                        <div className="container">
                            <div className="pagetitle">
                                <h1 className="title">Contact Us</h1>
                                <p className="desc">Reach out to us through our contact page. We're here to assist you every step of the way. Let's connect and make your experience even better!</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="fn__sign_form">
                            <div className="fn__contact" data-success="Your message has been received, We will contact you soon." data-empty="! Please Fill Required Fields !">
                                <form >
                                    <div className="fields">
                                        <section className="fn__input_section">
                                            <input type="text" name='username' placeholder='Name *' className='name fn__focus_input' value={formData.username} onChange={handleChange} />
                                        </section>
                                        <section className="fn__input_section">
                                            <input type="email" name="email" placeholder='Email *' value={formData.email} className="email fn__focus_input" onChange={handleChange} />
                                        </section>
                                        <section className="fn__input_section">
                                            <input type="text" name="topic" placeholder='Topic *' value={formData.topic} className="topic fn__focus_input" onChange={handleChange} />
                                        </section>
                                        <section className="fn__input_section">
                                            <textarea name="message" placeholder='Message' value={formData.message} className="message fn__focus_input" onChange={handleChange}></textarea>
                                        </section>
                                        <section className="fn__input_section">
                                            <button className="fn__submit has_bg">Submit</button>
                                        </section>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact
