import React from 'react'
import { Details, Eduction, Experience } from '../../Data/RightAboutContant'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import RightAbout1 from './RightAbout1';
import 'swiper/css';
import 'swiper/css/navigation';

interface RightAboutContant {
    lable: string,
    value: string | number,
}

interface EducationProps{
    univercity: string,
    degree: string,
    years: string
}

interface ExperienceProps{
    place: string,
    field: string,
    year: string
}

// interface testimonialProps {
//     description: string,
//     img: string,
//     author: string,
//     status: string
// }

const RightAbout = () => {
    return (
        <React.Fragment>
            <div className="about_right">
                <div className="about_right_in">
                    <RightAbout1 />
                    <section className="section_details">
                        <h3 className="section_title">Details</h3>
                        <div className="fn__details">
                            <ul>
                                {
                                    Details.map((items: RightAboutContant, index: number) => {
                                        return (
                                            <li key={index}>
                                                <div className="label">{items.lable}</div>
                                                <div className="value">{items.value}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>

                    <section className="section_skills">
                        <h3 className="section_title">Compétence</h3>

                        <div className="fn__progress">
                            <div className="fn__progress_item" data-percent="90">
                                <div className="progress_label">
                                    <h3 className="title">Gestions de projets</h3>
                                    <span className="percent">90%</span>
                                </div>
                                <div className="progress_bg">
                                    <div className="bg_active" style={{ width: "90%", backgroundColor: "black" }}><span></span></div>
                                </div>
                            </div>
                            <div className="fn__progress_item" data-percent="82">
                                <div className="progress_label">
                                    <h3 className="title">Rédaction & Analyse (articles, livres)</h3>
                                    <span className="percent">82%</span>
                                </div>
                                <div className="progress_bg">
                                    <div className="bg_active" style={{ width: "82%", backgroundColor: "black" }}><span></span></div>
                                </div>
                            </div>
                            <div className="fn__progress_item" data-percent="88">
                                <div className="progress_label">
                                    <h3 className="title">Travail d'équipe</h3>
                                    <span className="percent">88%</span>
                                </div>
                                <div className="progress_bg">
                                    <div className="bg_active" style={{ width: "88%", backgroundColor: "black" }}><span></span></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section_education">
                        <h3 className="section_title">Education</h3>
                        <div className="fn__edu">
                            <ul>
                                {
                                    Eduction.map((items: EducationProps, index: number) => {
                                        return (
                                            <li key={index}>
                                                <div className="item">
                                                    <div className="item_wai">
                                                        <span className="top">{items.univercity}</span>
                                                        <span className="btm">{items.degree}</span>
                                                    </div>
                                                    <div className="item_years">
                                                        <span className="text"><span>{items.years}</span></span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>

                    <section className="section_experience">
                        <h3 className="section_title">Experience</h3>
                        <div className="fn__edu">
                            <ul>
                                {
                                    Experience.map((items: ExperienceProps, index: number) => {
                                        return (
                                            <li key={index}>
                                                <div className="item">
                                                    <div className="item_wai">
                                                        <span className="top">{items.place}</span>
                                                        <span className="btm">{items.field}</span>
                                                    </div>
                                                    <div className="item_years">
                                                        <span className="text"><span>{items.year}</span></span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                    {/* <section className="section_testimonials">
                        <h3 className="section_title">Testimonials</h3>
                        <div className="fn__testimonials">
                            <Swiper pagination={true} navigation={false} modules={[Pagination, Navigation]}>
                                {
                                    Testimonials.map((items: testimonialProps, index: number) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="item">
                                                    <blockquote>{items.description}</blockquote>
                                                    <div className="title_holder">
                                                        <div className="img">
                                                            <img src={items.img} alt="" />
                                                        </div>
                                                        <div className="titles">
                                                            <h3 className="author">{items.author}</h3>
                                                            <h3 className="status">{items.status}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })

                                }
                            </Swiper>
                        </div>
                    </section> */}
                </div>
            </div >
        </React.Fragment >
    )
}

export default RightAbout
