import React from 'react'
import lifestyle from '../assets/img/tags/lifestyle.jpg';
import LatestProjects from '../Common/LatestProjects';
import LordMore from '../Common/LordMore';

const Tag = () => {
    document.title = "Tag | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <div className="mosso-fn-wrapper">
                <main className="mosso_fn_content">
                    <div className="mosso_fn_tag_page">
                        <div className="container">
                            <div className="fn__tag_info">
                                <div className="left_part">
                                    <div className="img">
                                        <div className="img_in">
                                            <img src={lifestyle} alt="loding.." />
                                        </div>
                                    </div>
                                </div>
                                <div className="right_part">
                                    <p className="small_desc">13 posts</p>
                                    <h1 className="title"><span className="text">Lifestyle<span className="cat cat-lifestyle"></span></span></h1>
                                    <p className="desc">Explore our lifestyle category for a curated collection of articles and guides covering health, fashion, travel, home decor, and personal development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="fn__section_title" style={{ marginBottom: "35px" }}>
                            <div className="container">
                                <div className="section_title_container">
                                    <h3 className="fn__title"><span className="text">Projects in Lifestyle</span></h3>
                                    <span className="title_decor"></span>
                                </div>
                            </div>
                        </div>
                        <section id="tag_page_latest_posts">
                            <LatestProjects />
                            <LordMore />
                        </section>
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Tag
