import React from 'react';
import { PremiumData } from '../Data/MemberShipContent';
import { Link } from 'react-router-dom';

interface premiumProps {
    id: number,
    img: string,
    description: string,
}

const Primium = () => {
    return (
        <React.Fragment>
            <section id="premium_posts">
                <div className="container">
                    <div className="fn__max_800">
                        <h3 className="premium_title">Premium Posts</h3>
                        <div className="fn__mini_posts">
                            {
                                PremiumData.map((items: premiumProps, index: number) => {
                                    return (
                                        <article key={index}>
                                            <div className="item">
                                                <div className="img_holder">
                                                    <Link to="/single">
                                                        <img src={items.img} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="title_holder">
                                                    <h3 className="title"><Link to="/single">{items.description}</Link></h3>
                                                    <Link to="/single" className="fn__icon_link_arrow">
                                                        <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                            viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                            <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Primium
