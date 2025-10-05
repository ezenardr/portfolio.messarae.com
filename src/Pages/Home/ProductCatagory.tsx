import React from 'react'
import Catagory from '../../Data/Catagory';
import { Link } from 'react-router-dom';

interface categoryProps {
    id: number,
    Img: string,
    Catagory: string,
    Rank: string,
}

const ProductCatagory = () => {
    return (
        <React.Fragment>
            <section id="home_tags">
                <div className="container">

                    <div className="fn__tag_list_alpha">
                        <ul>
                            {
                                Catagory.map((item: categoryProps, index: number) => {
                                    return (
                                        <li key={index}>
                                            <div className="item">
                                                <div className="img_holder">
                                                    <Link to="/tag">
                                                        <img src={item.Img} alt="loding.." />
                                                    </Link>
                                                </div>
                                                <div className="title_holder">
                                                    <Link to="/tag"><span className="text">{item.Catagory}<span className="count">{item.Rank}</span></span></Link>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ProductCatagory
