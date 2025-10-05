import React from 'react'
import { Link } from 'react-router-dom';
import pro2 from '../../assets/img/projects/2.jpg';
import pro3 from '../../assets/img/projects/3.jpg';

const SinglePost = () => {
    return (
        <React.Fragment>
            <div className="fn__pnb_wrapper">
                <div className="container">
                    <div className="fn__pnb">
                        <div className="pnb_left pnb_item">
                            <div className="img">
                                <Link to="/single">
                                    <img src={pro2} alt="loding..." />
                                </Link>
                            </div>
                            <div className="title_holder">
                                <span className="text">Newer Project</span>
                                <h3 className="title"><Link to="/single">Every Day is a Trip</Link></h3>
                            </div>
                        </div>
                        <div className="pnb_right pnb_item">
                            <div className="img">
                                <Link to="/single">
                                    <img src={pro3} alt="loding" />
                                </Link>
                            </div>
                            <div className="title_holder">
                                <span className="text">Older Project</span>
                                <h3 className="title"><Link to="/single">Leaving San Francisco</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fn__post_comment">
                <h4 className="title">Start the Conversation</h4>
                <p className="desc">Become a member of <strong>Mosso</strong> to start commenting.</p>
                <div className="btn">
                    <Link to="/sign-up" className="fn__btn"><span data-text="Sign Up Now">Sign Up Now</span></Link>
                </div>
                <p className="small_desc">ALready a member? <Link to="/sign-in">Sign In</Link></p>
            </div>
        </React.Fragment>
    )
}

export default SinglePost
