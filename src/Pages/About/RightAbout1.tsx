import React from 'react'
import { Link } from 'react-router-dom'

const RightAbout1 = () => {
    return (
        <React.Fragment>
            <section className="section_about">
                <div className="fn__metas">
                    <span className="cat">Ottawa</span>
                    {/* <span className="author">14 Posts</span> */}
                </div>
                <h1 className="title">Messara Ezenard</h1>
                <div className="desc">
                    <p>Je me suis engagée à écrire parce que je crois fermement que les mots ont le pouvoir de transformer des idées en expériences partagées. À travers mes articles, j'explore une multitude de thématiques, offrant des perspectives uniques et créant un espace où réflexion et inspiration se rencontrent.</p>
                    <p>Chaque jour, je découvre de nouvelles raisons de coucher mes pensées sur le papier et de les partager. Que ce soit pour répondre à une question, éclairer un sujet complexe ou simplement raconter une histoire qui résonne, ma passion pour l'écriture alimente ce voyage quotidien.</p>
                </div> 
                <div className="fn__social_info">
                    <div className="social mosso_fn_mini_social">
                        <ul>
                            <li>
                                <Link className="facebook" to="https://www.facebook.com/messara.ezenard.2025" target="_blank">
                                    <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            stroke="none">
                                            <path d="M2960 5104 c-394 -57 -704 -271 -868 -599 -118 -238 -142 -383 -142
                                             -876 l0 -349 -339 0 c-188 0 -351 -4 -364 -9 -14 -6 -35 -20 -46 -32 -21 -22
                                             -21 -29 -21 -483 0 -422 2 -463 18 -482 34 -43 47 -44 406 -44 l346 0 0 -1080
                                             0 -1080 29 -32 29 -33 466 -3 c411 -2 470 -1 497 13 62 32 59 -18 59 1150 l0
                                             1065 400 0 c288 0 406 3 425 12 55 25 55 29 55 517 l0 451 -29 32 -29 33 -412
                                             3 -411 3 3 323 3 322 30 59 c33 64 88 107 162 127 21 6 169 12 328 14 160 3
                                             301 7 313 10 13 3 35 17 48 31 l24 26 0 432 c0 424 0 432 -21 454 -11 12 -32
                                             26 -46 32 -40 15 -801 9 -913 -7z"/>
                                        </g>
                                    </svg>

                                </Link>
                            </li>
                            <li>
                                <Link className="twitter" to="https://www.facebook.com/messara.ezenard.2025" target="_blank">
                                    <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                width="428.000000pt" height="428.000000pt" viewBox="0 0 428.000000 428.000000"
                                                preserveAspectRatio="xMidYMid meet">
                                                <g transform="translate(0.000000,428.000000) scale(0.100000,-0.100000)"
                                                    stroke="none">
                                                    <path d="M826 4269 c-393 -58 -699 -337 -799 -726 l-22 -88 0 -1315 0 -1315
                                                    22 -88 c90 -351 342 -609 690 -705 l98 -27 1320 0 1320 0 88 22 c359 92 618
                                                    351 710 710 l22 88 0 1315 0 1315 -22 88 c-91 356 -347 614 -705 709 l-83 22
                                                    -1290 2 c-710 1 -1317 -2 -1349 -7z m2814 -435 c104 -31 200 -160 200 -268 0
                                                    -154 -134 -286 -289 -286 -277 1 -390 364 -161 516 83 55 156 66 250 38z
                                                    m-1265 -339 c320 -56 629 -238 831 -489 152 -188 243 -387 290 -631 24 -123
                                                    24 -348 -1 -475 -108 -572 -543 -1007 -1115 -1115 -127 -25 -352 -25 -475 -1
                                                   -375 72 -673 263 -894 574 -236 330 -308 774 -190 1175 103 349 360 657 688
                                                    826 277 142 567 188 866 136z"/>
                                                    <path d="M2025 2920 c-314 -50 -565 -274 -647 -579 -16 -58 -21 -106 -21 -201
                                                    0 -143 20 -235 73 -341 107 -213 281 -357 507 -421 110 -31 296 -31 406 0 277
                                                    78 481 282 559 558 31 111 31 296 0 407 -96 338 -378 564 -726 581 -50 3 -118
                                                    1 -151 -4z"/>
                                                </g>
                                            </svg>

                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="website">
                        <Link to="https://frenify.com" target="_blank">https://frenify.com</Link>
                    </div> */}
                </div>
                {/* <div className="btn">
                    <Link to="img/contact.jpg" className="fn__btn" download><span>Download CV</span></Link>
                </div> */}
            </section>
        </React.Fragment>
    )
}

export default RightAbout1
