import React from 'react'
import { AccountDetails } from '../Data/AcoountDetails';
import { Link } from 'react-router-dom';
import account from '../assets/img/account/1.jpg';

interface accountProp{
    lable : string,
    value : string,
}

const Account = () => {
    document.title = "Account | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <div className="mosso-fn-wrapper">
                <main className="mosso_fn_content">
                    <div className="mosso_fn_account_page">
                        <div className="container">
                            <div className="fn__author_info">
                                <div className="left_part">
                                    <div className="img">
                                        <div className="img_in">
                                            <img src={account} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="right_part">
                                    <p className="status"><span>Premium Plus</span></p>
                                    <h1 className="title">Evelina Green</h1>
                                    <p className="desc">Nice, you’re a paying subscriber! You’ve an active account with access to all posts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="fn__account_details">
                                <div className="details_header">
                                    <h3 className="title">Account Details</h3>
                                    <a href="#" className="fn__btn fn__open_sign_up"><span>Sign Out</span></a>
                                </div>
                                <div className="details_content">
                                    <ul>
                                        {
                                            AccountDetails.map((items: accountProp, index: number) => {
                                                return (
                                                    <li key={index}>
                                                        <p className="label">{items.lable}</p>
                                                        <p className="value"><a href="mailto:adam90ex@frenify.com">{items.value}</a></p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="details_footer">
                                    <ul>
                                        <li><Link to="#">Account Settings</Link></li>
                                        <li><Link to="#">Cancel Subscription</Link></li>
                                        <li><Link to="#">Edit Billing Info</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Account
