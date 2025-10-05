import React from 'react';
import LeftAbout from './LeftAbout';
import RightAbout from './RightAbout';


function About() {
    document.title = "About | Messara Ezenard - Personal Portfolio";
    return (
        <React.Fragment>
            <div className="mosso-fn-wrapper" data-has-sticky>
                <main className="mosso_fn_content">
                    <div className="mosso_fn_about_page">
                        <div className="container">
                            <div className="fn__about_page">
                                <LeftAbout />
                                <RightAbout />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default About
