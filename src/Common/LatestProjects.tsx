import React from 'react';
import { Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Project1 from '../assets/img/projects/1.jpg';
import Project2 from '../assets/img/projects/2.jpg';
import Project22 from '../assets/img/projects/222.jpg';
import Project3 from '../assets/img/projects/3.jpg';
import Project4 from '../assets/img/projects/4.jpg'
import Project5 from '../assets/img/projects/5.webp'
import Project6 from '../assets/img/projects/6.jpg'
// import Project5 from '../assets/img/projects/5.jpg';
// import Project6 from '../assets/img/projects/6.jpg';
// import Project7 from '../assets/img/projects/7.jpg';
// import Project8 from '../assets/img/projects/8.jpg';

const LatestProjects = () => {
    return (
        <React.Fragment>
            <div className="fn__blog_list_wrap">
                <div className="fn__blog_list">
                    <div className="container">
                        <ul className="blog_list fn__masonry_list">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2}}
                        >
                            <Masonry>

                                <li className="blog_item fn__masonry_item">
                                    <div className="fn__blog_item">

                                        <div className="img_holder">
                                            <Link to="https://messarae.com/ignorer-pour-mieux-agir"><img src={Project1} alt="Ignorer pour mieux agir, la réponse qui n'en est pas une." /> </Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><span className="fn__creative_link">Style de vie</span></span>
                                                <span className="author">27 aout, 2025</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">

                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="https://messarae.com/ignorer-pour-mieux-agir">Ignorer pour mieux agir, la réponse qui n'en est pas une.</Link></span></h3>
                                                <Link to="https://messarae.com/ignorer-pour-mieux-agir" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="blog_item fn__masonry_item">
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="https://messarae.com/mes-cheveux-ma-couronne-ma-puissance"><img src={Project22} alt="Mes cheveux, ma couronne, ma puissance" /> </Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><span className="fn__creative_link">Style de vie</span></span>
                                                <span className="author">15 Juillet, 2025</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">

                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="https://messarae.com/mes-cheveux-ma-couronne-ma-puissance">Mes cheveux, ma couronne, ma puissance</Link></span></h3>
                                                <Link to="https://messarae.com/mes-cheveux-ma-couronne-ma-puissance" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog_item fn__masonry_item">
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="https://messarae.com/jean-jacques-dessalines"><img src={Project2} alt="Jean-Jacques Dessaline: 21 Pwen konnen sou lavi li" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><span className="fn__creative_link">Coup de coeur</span></span>
                                                <span className="author">18 mai, 2025</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="https://messarae.com/jean-jacques-dessalines">Jean-Jacques Dessaline: 21 Pwen konnen sou lavi li</Link></span></h3>
                                                <Link to="https://messarae.com/jean-jacques-dessalines" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog_item fn__masonry_item">
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="https://messarae.com/claudine-hilaire"><img src={Project4} alt="A la rencontre de Claudyne Hilaire, une source s'inspiration Eblouissante" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><span className="fn__creative_link">Visages inspirants</span></span>
                                                <span className="author">11 avril, 2025</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="https://messarae.com/claudine-hilaire">A la rencontre de Claudyne Hilaire, une source s'inspiration Eblouissante</Link></span></h3>
                                                <Link to="https://messarae.com/claudine-hilaire" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog_item fn__masonry_item  block-small-img">
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="https://messarae.com/jamais-sans-mon-frere"><img src={Project3} alt="Jamais Sans Mon Frère" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><span className="fn__creative_link">Style de vie</span></span>
                                                <span className="author">07 janvier, 2025</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="https://messarae.com/jamais-sans-mon-frere">Jamais Sans Mon Frère</Link></span></h3>
                                                <Link to="https://messarae.com/jamais-sans-mon-frere" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog_item fn__masonry_item  block-small-img">
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="https://lecahier.com/que-faire-quand-le-changement-simpose-a-nous/"><img src={Project5} alt="Que faire quand le changement s'impose à nous?" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><span className="fn__creative_link">Style de vie</span></span>
                                                <span className="author">26 novembre, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="https://lecahier.com/que-faire-quand-le-changement-simpose-a-nous/">Que faire quand le changement s'impose à nous?</Link></span></h3>
                                                <Link to="https://lecahier.com/que-faire-quand-le-changement-simpose-a-nous/" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="blog_item fn__masonry_item  block-small-img">
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="https://www.amazon.com/vie-derri%C3%A8re-rideaux-French/dp/B0CMMSM424/ref=sr_1_1?crid=8TVMGLLZN5YW&dib=eyJ2IjoiMSJ9.-z3Z20majXgQRrtZ7z_C3W9oWloJRdTyhpwvP_V8XMrpc5lQlU6nn9U8dputvczLkW77wQ0cXt1F2ikhlIZOuB6fLsyURNT-xAVAaCnneNo.cNJhY85MEVSrgIESTbFcXJ6-SgGkqiagIybBzVSvOuE&dib_tag=se&keywords=la+vie+derriere+les+rideaux&qid=1759671491&sprefix=la+vie+deriere+les+rideau%2Caps%2C103&sr=8-1"><img src={Project6} alt="La vie derrière les rideaux (French Edition)" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><span className="fn__creative_link">Livre</span></span>
                                                <span className="author">02 novembre, 2023</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="https://www.amazon.com/vie-derri%C3%A8re-rideaux-French/dp/B0CMMSM424/ref=sr_1_1?crid=8TVMGLLZN5YW&dib=eyJ2IjoiMSJ9.-z3Z20majXgQRrtZ7z_C3W9oWloJRdTyhpwvP_V8XMrpc5lQlU6nn9U8dputvczLkW77wQ0cXt1F2ikhlIZOuB6fLsyURNT-xAVAaCnneNo.cNJhY85MEVSrgIESTbFcXJ6-SgGkqiagIybBzVSvOuE&dib_tag=se&keywords=la+vie+derriere+les+rideaux&qid=1759671491&sprefix=la+vie+deriere+les+rideau%2Caps%2C103&sr=8-1">La vie derrière les rideaux (French Edition)</Link></span></h3>
                                                <Link to="https://www.amazon.com/vie-derri%C3%A8re-rideaux-French/dp/B0CMMSM424/ref=sr_1_1?crid=8TVMGLLZN5YW&dib=eyJ2IjoiMSJ9.-z3Z20majXgQRrtZ7z_C3W9oWloJRdTyhpwvP_V8XMrpc5lQlU6nn9U8dputvczLkW77wQ0cXt1F2ikhlIZOuB6fLsyURNT-xAVAaCnneNo.cNJhY85MEVSrgIESTbFcXJ6-SgGkqiagIybBzVSvOuE&dib_tag=se&keywords=la+vie+derriere+les+rideaux&qid=1759671491&sprefix=la+vie+deriere+les+rideau%2Caps%2C103&sr=8-1" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>



                                {/* <li className="blog_item fn__masonry_item" >
                                    <div className="fn__blog_item">

                                        <div className="blog_btns">
                                            <span className="fn__popup_btn fn__popup_gallery fn__tooltip">
                                                <Link to={Project1} className="zoom"></Link>
                                                <Link to={Project2} className="zoom"></Link>
                                                <Link to={Project3} className="zoom"></Link>
                                                <Link to={Project4} className="zoom"></Link>
                                                <span className="tooltip_text">See Gallery</span>
                                                <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                                    preserveAspectRatio="xMidYMid meet">
                                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                                        stroke="none">
                                                        <path d="M1270 4684 c-196 -42 -359 -202 -405 -395 -13 -55 -15 -233 -15
                                                    -1301 0 -855 3 -1253 11 -1290 29 -140 140 -289 264 -355 130 -68 -9 -63 1863
                                                    -63 l1693 0 76 25 c174 59 303 195 349 370 11 40 14 292 14 1310 0 1378 2
                                                    1317 -58 1429 -15 28 -56 81 -91 119 -74 78 -183 138 -285 156 -41 8 -578 11
                                                    -1705 10 -1375 0 -1657 -3 -1711 -15z m3379 -450 c17 -14 33 -39 36 -57 3 -18
                                                    4 -365 3 -772 l-3 -739 -347 404 c-191 223 -363 415 -382 428 -146 99 -345 88
                                                    -472 -25 -18 -15 -211 -243 -429 -506 l-398 -478 -147 145 c-167 165 -226 202
                                                    -341 212 -73 7 -170 -13 -228 -48 -20 -11 -177 -161 -348 -332 l-313 -311 0
                                                    995 c0 651 4 1008 10 1032 6 20 22 46 37 58 26 20 29 20 1659 20 l1632 0 31
                                                    -26z"/>
                                                        <path d="M1830 4049 c-123 -24 -245 -122 -302 -244 -23 -51 -31 -84 -35 -148
                                                    -12 -184 74 -335 235 -414 75 -37 78 -38 192 -38 114 0 117 1 192 38 161 79
                                                    247 230 235 414 -16 260 -257 443 -517 392z"/>
                                                        <path d="M528 3210 c-4 -8 -123 -400 -264 -870 -243 -809 -257 -860 -262 -952
                                                    -3 -79 0 -109 17 -166 39 -130 137 -244 256 -298 28 -12 799 -224 1715 -470
                                                    l1665 -448 126 0 126 -1 85 42 c95 47 171 119 212 202 22 42 226 676 226 700
                                                    0 8 -456 11 -1532 11 -868 0 -1574 5 -1629 10 -290 28 -532 199 -653 462 -74
                                                    158 -69 105 -76 993 -3 440 -8 793 -12 785z"/>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>

                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project6} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Photography</Link></span>
                                                <span className="author">May 30, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Capturing the Beauty of Nature: Photography Tips</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog_item fn__masonry_item" >
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project5} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Fitness</Link></span>
                                                <span className="author">May 25, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Transform Your Body: Fitness Tips and Techniques</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                                <li className="blog_item fn__masonry_item" >
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project8} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Education</Link></span>
                                                <span className="author">June 10, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Empowering Minds: Educational Insights and Resources</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="blog_item fn__masonry_item" >
                                    <div className="fn__blog_item">

                                        <div className="blog_btns">

                                            <Link to="https://vimeo.com/337293658" className="fn__popup_btn fn__popup_vimeo fn__tooltip">
                                                <span className="tooltip_text">Watch Video</span>
                                                <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                                    preserveAspectRatio="xMidYMid meet">

                                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                                        stroke="none">
                                                        <path d="M4175 4804 c-265 -28 -596 -204 -869 -464 -137 -130 -294 -348 -373
                                                   -519 -31 -67 -125 -323 -120 -328 1 -1 67 3 146 8 302 20 433 -19 479 -144 71
                                                   -192 17 -456 -168 -822 -202 -400 -335 -546 -463 -504 -56 18 -153 114 -200
                                                   199 -98 177 -135 336 -187 805 -56 507 -147 983 -224 1171 -79 194 -211 361
                                                   -333 421 -92 46 -184 59 -298 45 -301 -38 -567 -207 -1155 -736 -85 -77 -212
                                                   -189 -283 -249 l-127 -109 0 -53 c0 -36 5 -57 16 -66 9 -7 38 -46 65 -85 87
                                                   -130 148 -161 292 -151 50 3 129 19 204 41 150 44 212 47 260 10 52 -39 112
                                                   -179 204 -474 132 -424 145 -471 270 -968 65 -260 135 -524 154 -588 157 -501
                                                   333 -770 579 -885 85 -40 162 -53 276 -45 247 15 502 130 800 360 434 335 869
                                                   859 1239 1495 291 501 566 1122 696 1572 50 172 59 230 59 389 1 122 -3 158
                                                   -22 225 -63 220 -231 369 -478 425 -87 20 -343 34 -439 24z"/>
                                                    </g>
                                                </svg>
                                            </Link>

                                        </div>

                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project7} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Art</Link></span>
                                                <span className="author">June 05, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="single">Unleashing Creativity: Artistic Inspirations</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                            </Masonry>
                            </ResponsiveMasonry>
                        </ul>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default LatestProjects
