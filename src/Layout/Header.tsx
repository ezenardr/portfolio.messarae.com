import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logolight from '../assets/img/logo-light.png'
import logodark from '../assets/img/logo-dark.png'
import moon from '../assets/svg/moon.svg'
// import search1 from '../assets/svg/search.svg'

interface HeaderProps {
    searchRef: React.RefObject<HTMLDivElement>;
    handleSearchOpen: () => void;
  }
  

const Header = ({} : HeaderProps ) => {

    // const [display, setDisplay] = useState(true);
    const [theme, setTheme] = useState(false);
    const location = useLocation()

    useEffect(() => {
        const demo = document.documentElement
        demo.setAttribute('data-site-skin', theme ? 'dark' : 'light')
    }, [theme])


    // const handleDisplay = () => {
    //     setDisplay(false)
    // }

    const handleMode = () => {
        setTheme(!theme)

    }
    return (
        <React.Fragment>
            <div className="clearfix"></div>
            {/* <div className="mosso_fn_searchbox">
                <div className="search_content">

                    <div className="searchbox">
                        <input type="text" name="Search" placeholder="Search posts, tags and authors" />
                        <img src={search1} alt="" className="fn__svg" />
                    </div>


                    <div className="search_result">
                        <ul></ul>
                    </div>
                </div>
            </div> */}
            <header id="mosso_fn_header">
                <div className="mosso_fn_header">
                    {/* <div className="header_ad" onClick={handleDisplay} style={{ display: `${display ? "block" : "none"}` }}>
                        <p>Get access to premium posts. <Link to="/membership">Try our Gold package for 14 days free</Link></p>
                        <Link to="#" className="ad_closer"></Link>
                    </div> */}
                    <div className="header_top">
                        <div className="header_top_left">
                            <div className="fn__logo">

                                <Link to="/">
                                    <img src={logolight} alt="" className="light" />
                                    <img src={logodark} alt="" className="dark" />
                                </Link>
                            </div>
                        </div>
                        <div className="header_top_middle">
                            <nav className="mosso_fn_nav">
                                <div className="menu">
                                    <ul role="menu" className="mosso_fn_main_nav">
                                        <li><Link to="/" className={location.pathname === '/' ? "active" : ""}>Home</Link></li>
                                        <li ><Link to="/about" className={location.pathname === '/about' ? "active" : ""}>About</Link></li>
                                        {/* <li><Link to="/tags" className={location.pathname === '/tags' ? "active" : ""}>Tags</Link></li> */}
                                        {/* <li ><Link to="/authors" className={location.pathname === '/authors' ? "active" : ""}>Authors</Link></li> */}
                                        <li ><Link to="/projects" className={location.pathname === '/projects' ? "active" : ""}>Projects</Link></li>
                                        {/* <li ><Link to="/membership" className={location.pathname === '/membership' ? "active" : ""}>Membership</Link></li> */}
                                        {/* <li className="menu-item-has-children">
                                            <Link to="#">More</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/contact" className={location.pathname === '/contact' ? "active" : ""}>Contact</Link></li>
                                                <li><Link to="/account" className={location.pathname === '/account' ? "active" : ""}>Account</Link></li>
                                                <li><Link to="/404" className={location.pathname === '/404' ? "active" : ""}>404 Page</Link></li>
                                                <li><Link to="/author" className={location.pathname === '/author' ? "active" : ""}>Author</Link></li>
                                                <li><Link to="/tag" className={location.pathname === '/tag' ? "active" : ""}>Tag</Link></li>
                                                <li><Link to="/sign-up" className={location.pathname === '/sign-up' ? "active" : ""}>Sign Up</Link></li>
                                                <li><Link to="/sign-in" className={location.pathname === '/sign-in' ? "active" : ""}>Sign In</Link></li>
                                                <li><Link to="/single" className={location.pathname === '/single' ? "active" : ""}>Single</Link></li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                </div>
                                {/* <div className="more">
                                    <Link to="#">
                                        <span>More...</span>
                                    </Link>
                                    <ul className="sub-menu"></ul>
                                </div> */}
                            </nav>
                        </div>
                        <div className="header_top_right">
                            <div className="icon_holder">
                                <div className="fn__site_skin" onClick={handleMode}>
                                    <Link to="#" className="fn__icon" >
                                        <span className="icon light">
                                            {/* <Sun /> */}
                                            <svg version="1.1" id="Layer_1" className='fn__svg' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 319.2 319.2" xmlSpace="preserve">
                                                <path d="M63.8,159.4c0.1-52.9,43.3-95.8,96.2-95.6c52.7,0.2,95.5,43.2,95.4,96c-0.1,52.9-43.3,95.8-96.2,95.6
	C106.5,255.2,63.7,212.2,63.8,159.4z M223.4,159.6c0-35.3-28.3-63.7-63.6-63.8c-35.4-0.1-64,28.4-63.9,63.8
	c0,35.3,28.4,63.7,63.6,63.8C194.9,223.5,223.4,195,223.4,159.6z"/>
                                                <path d="M41.9,59.8c0.3-8.3,3.2-13.3,9.1-16.1c5.9-2.9,11.8-2.4,16.8,1.9c4.9,4.2,9.5,8.8,13.7,13.7c5.5,6.3,4.8,15.5-1.1,21.3
	c-5.8,5.7-14.8,6.4-21,1.1c-5-4.3-9.7-9-13.9-14C43.4,65.1,42.7,61.5,41.9,59.8z"/>
                                                <path d="M277.1,57.9c0,4.3-1.5,8.1-4.5,11.1c-3.8,3.9-7.6,7.9-11.6,11.6c-6.7,6.2-16.3,6.1-22.5-0.2c-6.1-6.2-6.2-15.7-0.1-22.2
	c3.9-4.2,7.9-8.3,12.2-12.1c5-4.5,10.8-5.3,17-2.6C273.5,46,277.1,51.6,277.1,57.9z"/>
                                                <path d="M59.8,277.3c-8.3-0.4-13.2-3.2-16.1-8.9c-2.9-5.8-2.6-11.8,1.6-16.8c4.2-5,9-9.7,13.9-14c6.3-5.5,15.5-4.7,21.3,1.2
	c5.7,5.8,6.3,14.9,0.9,21.1c-4.2,4.9-8.8,9.5-13.8,13.7C65.2,275.7,61.5,276.5,59.8,277.3z"/>
                                                <path d="M277.3,259.4c-0.4,8.4-3.3,13.4-9.2,16.2c-5.9,2.8-11.8,2.3-16.8-2c-4.9-4.2-9.5-8.8-13.7-13.7c-5.4-6.2-4.7-15.3,1-21
	c5.8-5.9,15-6.7,21.3-1.2c4.9,4.2,9.5,8.8,13.6,13.8C275.7,254,276.5,257.7,277.3,259.4z"/>
                                                <path d="M175.5,24c0,2.9,0.1,5.7,0,8.6c-0.4,8.6-7.3,15.2-15.8,15.3c-8.5,0-15.6-6.6-15.9-15.1c-0.2-6-0.2-12,0-17.9
	C144.1,6.4,151.1,0,159.5,0c8.5,0,15.4,6.3,15.9,14.7C175.6,17.8,175.4,20.9,175.5,24C175.4,24,175.4,24,175.5,24z"/>
                                                <path d="M23.8,175.5c-2.9,0-5.7,0.1-8.6,0C6.5,175.1,0,168.3,0,159.7c0-8.6,6.4-15.6,15-15.9c6-0.2,12-0.2,17.9,0
	c8.3,0.3,14.9,7.4,14.9,15.7c0.1,8.3-6.4,15.4-14.7,15.9C30,175.6,26.9,175.4,23.8,175.5C23.8,175.4,23.8,175.5,23.8,175.5z"/>
                                                <path d="M295.4,143.7c3,0,6-0.1,9,0c8.4,0.4,14.8,7.3,14.8,15.7c0,8.5-6.3,15.5-14.7,15.9c-6.1,0.3-12.2,0.3-18.3,0
	c-8.3-0.3-14.8-7.4-14.9-15.7c-0.1-8.5,6.6-15.5,15.1-15.9C289.5,143.6,292.4,143.7,295.4,143.7z"/>
                                                <path d="M175.4,295.4c0,3,0.1,6,0,9c-0.4,8.4-7.3,14.8-15.7,14.8c-8.5,0-15.5-6.3-15.9-14.7c-0.3-6.1-0.3-12.2,0-18.3
	c0.3-8.3,7.4-14.8,15.7-14.9c8.3-0.1,15.4,6.5,15.9,14.8C175.6,289.2,175.4,292.3,175.4,295.4z"/>
                                            </svg>

                                        </span>
                                        <span className="icon dark"><img src={moon} alt="Dark Icon" className="fn__svg" /></span>
                                    </Link>
                                </div>

                                {/* <div
                                    ref={searchRef}
                                    className="fn__search_btn">
                                    <Link to="#" className="fn__icon" onClick={handleSearchOpen}>
                                        <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" className='fn__svg' xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 474.06 473.06"
                                            xmlSpace="preserve"
                                        >
                                            <path d="M201,402C90.17,402,0,311.83,0,201S90.17,0,201,0s201,90.17,201,201S311.83,402,201,402z M201,55.34
	c-80.31,0-145.66,65.34-145.66,145.66S120.69,346.66,201,346.66S346.66,281.31,346.66,201S281.31,55.34,201,55.34z"/>
                                            <path d="M464.92,423.75l-75.67-75.67c-1.23-1.23-2.54-2.31-3.91-3.27c-11.46,15.18-25.03,28.69-40.27,40.07
	c0.98,1.42,2.09,2.77,3.35,4.03l75.67,75.67c11.28,11.28,29.56,11.28,40.83,0v0C476.19,453.31,476.19,435.02,464.92,423.75z"/>
                                        </svg>

                                    </Link>
                                </div> */}
                            </div>
                            {/* <div className="btn_holder">
                                <Link to="/sign-in" className="fn__link">Sign In</Link>
                                <Link to="/membership" className="fn__btn"><span>Join Now</span></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
