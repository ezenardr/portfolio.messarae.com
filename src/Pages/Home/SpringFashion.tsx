import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import slider1 from '../../assets/img/slider/1.jpg';
import slider2 from '../../assets/img/slider/2.jpg';
import slider3 from '../../assets/img/slider/3.jpg';
// import slider4 from '../../assets/img/slider/4.jpg';
// import slider5 from '../../assets/img/slider/5.jpg';

const SpringFashion = () => {

    return (
        <React.Fragment>
            <section id="home_featured_posts">
                <div className="container">
                    <div className="fn__featured_posts">
                        <div className="fp_decor"></div>
                        <div className="owl-carousel">
                            <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]}>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Link to="https://messarae.com/celebration-de-la-force-feminine">
                                                <img src={slider1} alt="Célébration de la force Féminine" />
                                            </Link>
                                        </div>
                                        <div className="title_holder">
                                            <div className="fn__metas">
                                                <span className="cat"><span className="fn__creative_link">Style De Vie</span></span>
                                                <span className="author">28 Mars, 2025</span>
                                            </div>
                                            <h3 className="fn__title fn__limited_title">
                                                <span>
                                                    <Link to="https://messarae.com/celebration-de-la-force-feminine">Célébration de la force Féminine</Link>
                                                </span>
                                            </h3>
                                            <p className="desc">Qui d'autre qu'une femme aurait passé des années à revendiquer ses droits et qu'en dépit de tous les obstacles, serait restée tenace ?</p>
                                            <div className="read_more">
                                                <Link to="https://messarae.com/celebration-de-la-force-feminine" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Link to="https://messarae.com/yvenelda-oscar">
                                                <img src={slider2} alt="Yvenelda Oscar, La force d’une femme qui change les règles du jeu" />
                                            </Link>
                                        </div>
                                        <div className="title_holder">
                                            <div className="fn__metas">
                                                <span className="cat"><span className="fn__creative_link">A Coeur Ouvert</span></span>
                                                <span className="author">13 Avril, 2025</span>
                                            </div>
                                            <h3 className="fn__title fn__limited_title">
                                                <span>
                                                    <Link to="https://messarae.com/yvenelda-oscar">Yvenelda Oscar, La force d’une femme qui change les règles du jeu</Link>
                                                </span>
                                            </h3>
                                            <p className="desc">Si vous pouvez vous débarrasser de vos doutes et croire en vous-mêmes, vous pourrez réaliser ce que vous n’auriez jamais cru possible.</p>
                                            <div className="read_more">
                                                <Link to="https://messarae.com/yvenelda-oscar" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Link to="https://messarae.com/roodia-roseus">
                                                <img src={slider3} alt="Derrière le Sourire: La Force et la Résilience d'une Femme Exemplaire" />
                                            </Link>
                                        </div>
                                        <div className="title_holder">
                                            <div className="fn__metas">
                                                <span className="cat"><span className="fn__creative_link">A coeur ouvert</span></span>
                                                <span className="author">10 mai, 2025</span>
                                            </div>
                                            <h3 className="fn__title fn__limited_title">
                                                <span>
                                                    <Link to="https://messarae.com/roodia-roseus">Derrière le Sourire: La Force et la Résilience d'une Femme Exemplaire</Link>
                                                </span>
                                            </h3>
                                            <p className="desc">J'ai observé combien c'était compliqué pour ma mère de joindre les deux bouts, je n'avais pas le choix que de réussir.</p>
                                            <div className="read_more">
                                                <Link to="https://messarae.com/roodia-roseus" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    )
}

export default SpringFashion
