import React from 'react'
import { Link } from 'react-router-dom'
import mini1 from '../../assets/img/authors/1-mini.jpg';
import mini2 from '../../assets/img/authors/2-mini.jpg';

const SinglePostTop = () => {
    return (
        <React.Fragment>
            <div className="fn__single_post">
                <div className="container">
                    <div className="fn__single_top">
                        <div className="post_info">
                            <div className="post_status">
                                <span className="fn__icon small fn__tooltip"><span className="tooltip_text">Private Post</span>
                                    <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            stroke="none">
                                            <path d="M940 4984 c-43 -19 -68 -41 -87 -78 -19 -36 -20 -114 -3 -147 30 -56
                                            243 -338 268 -355 42 -28 120 -30 169 -5 74 37 112 138 80 211 -8 19 -66 105
                                            -129 190 -93 127 -121 159 -158 178 -51 26 -91 27 -140 6z"/>
                                            <path d="M4040 4978 c-37 -19 -66 -51 -167 -191 -76 -105 -125 -181 -129 -203
                                            -21 -114 65 -212 180 -202 28 2 63 12 78 22 25 17 238 299 268 355 17 33 16
                                            111 -3 147 -20 38 -44 60 -90 79 -50 21 -85 19 -137 -7z"/>
                                            <path d="M2445 4717 c-69 -23 -118 -54 -168 -104 -40 -41 -80 -114 -251 -459
                                            l-203 -409 -374 -54 c-497 -71 -532 -77 -590 -107 -146 -73 -228 -219 -216
                                            -385 10 -146 14 -151 392 -524 l336 -330 -76 -437 c-41 -240 -75 -454 -75
                                            -475 0 -60 28 -153 61 -205 89 -138 263 -212 419 -179 36 8 188 82 449 219
                                            217 114 400 208 406 210 7 1 191 -92 411 -207 268 -141 417 -214 454 -222 238
                                            -51 478 141 480 384 0 21 -34 235 -75 475 l-76 437 336 330 c381 375 383 378
                                            392 528 4 67 1 94 -17 146 -53 156 -160 246 -332 275 -46 8 -251 38 -457 68
                                            l-374 53 -203 410 c-179 360 -210 415 -255 461 -75 76 -149 107 -264 111 -56
                                            2 -105 -2 -130 -10z m370 -774 c123 -247 234 -456 250 -473 16 -17 45 -35 65
                                            -41 19 -5 238 -39 485 -74 248 -36 462 -68 478 -71 32 -7 51 -37 43 -67 -3
                                            -12 -163 -175 -355 -362 -193 -187 -358 -354 -366 -372 -8 -17 -15 -50 -15
                                            -74 0 -23 36 -253 80 -511 62 -359 78 -473 70 -488 -25 -46 -42 -39 -421 161
                                            -513 271 -536 281 -582 276 -24 -3 -206 -93 -479 -237 -459 -241 -473 -246
                                            -498 -200 -8 15 8 129 70 488 44 258 80 488 80 513 0 24 -8 59 -17 76 -10 18
                                            -151 161 -313 318 -447 433 -430 414 -397 458 14 20 -5 17 547 97 228 33 428
                                            63 443 66 68 14 89 48 308 493 115 234 217 436 225 449 12 18 23 22 47 20 32
                                            -3 35 -9 252 -445z"/>
                                            <path d="M281 2185 c-205 -67 -239 -87 -267 -152 -45 -104 38 -232 150 -233
                                            44 0 372 102 429 133 92 51 111 179 39 261 -24 26 -91 56 -127 55 -16 -1 -117
                                            -29 -224 -64z"/>
                                            <path d="M4545 2231 c-22 -10 -48 -27 -57 -37 -24 -27 -48 -88 -48 -121 0 -48
                                            38 -111 83 -137 58 -32 387 -136 433 -136 55 0 118 41 143 93 35 73 25 136
                                            -32 195 -27 28 -62 43 -232 97 -111 36 -212 65 -225 65 -14 0 -43 -9 -65 -19z"/>
                                            <path d="M2506 800 c-16 -5 -42 -22 -59 -37 -53 -50 -57 -73 -57 -300 0 -186
                                            2 -211 20 -247 56 -115 218 -126 290 -19 24 36 25 41 28 247 2 127 -1 225 -7
                                            246 -18 62 -101 122 -165 119 -12 0 -34 -5 -50 -9z"/>
                                        </g>
                                    </svg>
                                </span>
                                <span className="fn__icon small fn__tooltip"><span className="tooltip_text">Locked Post</span>
                                    <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                            stroke="none">
                                            <path d="M2387 5105 c-348 -59 -643 -273 -793 -576 -104 -210 -114 -282 -114
                                            -841 l0 -448 -207 0 c-144 0 -230 -5 -278 -15 -225 -47 -413 -235 -460 -460
                                            -22 -104 -22 -2186 0 -2290 47 -225 235 -413 460 -460 105 -22 3025 -22 3130
                                            0 225 47 413 235 460 460 12 59 15 238 15 1145 0 1193 2 1151 -66 1290 -51
                                            103 -161 213 -264 264 -113 55 -182 66 -422 66 l-207 0 -3 488 -4 487 -27 100
                                            c-98 362 -369 645 -724 755 -155 48 -341 61 -496 35z m311 -401 c44 -9 117
                                            -35 171 -61 78 -37 109 -59 177 -127 65 -66 90 -99 123 -168 68 -140 71 -165
                                            71 -665 l0 -443 -680 0 -680 0 0 443 c0 349 3 457 15 512 39 188 177 362 355
                                            448 151 74 292 93 448 61z m1408 -1896 c21 -15 50 -44 64 -65 l25 -37 0 -1086
                                            0 -1086 -25 -37 c-14 -21 -43 -50 -64 -65 l-39 -27 -1507 0 -1507 0 -39 27
                                            c-21 15 -50 44 -64 65 l-25 37 -3 1064 c-1 705 1 1076 8 1102 12 46 80 116
                                            124 129 18 6 646 9 1522 8 l1491 -2 39 -27z"/>
                                            <path d="M2461 2244 c-153 -41 -271 -198 -271 -360 0 -95 68 -233 140 -284
                                            l29 -20 3 -253 3 -254 27 -40 c41 -63 90 -88 168 -88 84 0 137 33 175 108 25
                                            50 25 54 25 288 l0 238 29 20 c73 52 141 189 141 285 0 165 -118 320 -275 361
                                            -72 18 -123 18 -194 -1z"/>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div className="post_cats">
                                <Link to="tag.html">Sport /</Link>
                                <Link to="tag.html">Travel /</Link>
                            </div>
                        </div>
                        <h1 className="post_title">A Guide to Minimalist Living for the Modern Soul</h1>
                        <p className="excerpt">Discover how to prioritize what truly matters, let go of excess, and create space for joy and fulfillment. Through minimalist living, you can reduce stress, increase your focus, and cultivate a greater sense of freedom and purpose.</p>
                        <div className="author_holder">
                            <div className="imgs">
                                <img src={mini1} alt="" />
                                <img src={mini2} alt="" />
                            </div>
                            <div className="titles">
                                <h3 className="authors">by <a href="author.html">Breana Flatley</a> & <a href="author.html">Damian Erdman</a></h3>
                                <span className="info">September 25, 2024 — 5 Min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SinglePostTop
