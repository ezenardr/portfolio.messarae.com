import React from 'react';
import TabView from './TabView';
import Primium from '../../Common/Primium';
import Testimonials from './Testimonials';

const MemberShip = () => {
    document.title="Membership | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <div className="mosso-fn-wrapper">
                <div className="mosso_fn_membership_page">
                    <div className="mosso_fn_pagetitle">
                        <div className="container">
                            <div className="pagetitle">
                                <h1 className="title">Membership</h1>
                                <p className="desc">Get unlimited access to 'Mosso' and explore a wealth of exclusive content on health, fashion, travel, home decor, and personal development. Stay updated with our latest articles</p>
                            </div>
                        </div>
                    </div>
                    <TabView />
                    <Testimonials />
                    <Primium />
                </div>
            </div>
        </React.Fragment>
    )
}

export default MemberShip
