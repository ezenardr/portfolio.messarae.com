import React from 'react'
import LordMore from '../Common/LordMore';
import LatestProjects from '../Common/LatestProjects';

const Projects = () => {
    document.title = "Project | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <div className="mosso-fn-wrapper">
                <main className="mosso_fn_content">
                    <div className="mosso_fn_project_page" style={{marginBottom: "100px"}}>
                        <div className="fn__section_title">
                            <div className="container" style={{ marginBottom: "40px" }}>
                                <div className="section_title_container">
                                    <h3 className="fn__title"><span className="text">All Projects</span></h3>
                                </div>
                            </div>
                        </div>
                        <LatestProjects />
                        <LordMore />
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Projects
