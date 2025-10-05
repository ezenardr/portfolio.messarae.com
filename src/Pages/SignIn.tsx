import React, { useState } from 'react'

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: ""
    })

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    document.title = "Sign_In | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <main className="mosso_fn_content">
                <div className="mosso_fn_sign_in_page">
                    <div className="mosso_fn_pagetitle">
                        <div className="container">
                            <div className="pagetitle">
                                <h1 className="title">Welcome Back</h1>
                                <p className="desc">Unlock access to exclusive content, personalized features, and seamless interaction. Join our community today and embark on a journey tailored just for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="fn__sign_form">
                            <form>
                                <div className="form_top">
                                    <section className="fn__input_section">
                                        <input type="email" name="email" placeholder='Email *' value={formData.email} className="email fn__focus_input" onChange={handleChange} />
                                    </section>
                                    <div className="fn__input_section">
                                        <button className="fn__submit has_bg">
                                            <span className="text">Send Login Link</span>
                                            <span className="preloader">...</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="form_bottom">
                                    <div className="sign_message">
                                        <p className="desc">Don’t have an account yet? <a href="sign-up.html">Sign up</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default SignIn
