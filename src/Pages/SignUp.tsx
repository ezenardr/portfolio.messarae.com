import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
    })

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    }
    document.title = "Signup | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <main className="mosso_fn_content">
                <div className="mosso_fn_sign_up_page">
                    <div className="mosso_fn_pagetitle">
                        <div className="container">
                            <div className="pagetitle">
                                <h1 className="title">Create Account</h1>
                                <p className="desc">Sign up now to unlock exclusive benefits, personalized experiences, and stay
                                    updated with the latest news and offerings. Your journey starts here!</p>
                            </div>
                        </div>
                    </div>
                    <div className="fn__sign_form">
                        <form onSubmit={handleSubmit}>
                            <div className="form_top">
                                <section className="fn__input_section">
                                    <input type="text" name='username' placeholder='Name *' value={formData.username} className="name fn__focus_input" onChange={handleChange} />
                                </section>
                                <section className="fn__input_section">
                                    <input type="email" name='email' placeholder='Email*' value={formData.email} className="email fn__focus_input" onChange={handleChange} />
                                </section>
                                <div className="fn__input_section">
                                    <button className="fn__submit has_bg">
                                        <span className="text">Submit</span>
                                        <span className="preloader">...</span>
                                    </button>
                                </div>
                            </div>
                            <div className="form_bottom">
                                <div className="sign_message">
                                    <p className="desc">Already have an account? <Link to="/sign-in">Sign in</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main >
        </React.Fragment >
    )
}

export default SignUp
