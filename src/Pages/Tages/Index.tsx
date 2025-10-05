import React from 'react'
import Data from '../../Data/TagesContent'
import { Link } from 'react-router-dom'


interface dataProps {
    Img: string,
    Catagory: string,
    Rank: string,
}

const Tages = () => {
    document.title = "Tages | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <main className="mosso_fn_content">
                <div className="mosso_fn_tags_page">
                    <div className="mosso_fn_pagetitle">
                        <div className="container">
                            <div className="pagetitle">
                                <h1 className="title">Tags</h1>
                                <p className="desc">Discover a rich collection of tags categorizing our content, making it easier to find topics of interest.</p>
                            </div>
                        </div>
                    </div>
                    <section id="tags_page_tags">
                        <div className="container">
                            <div className="fn__tag_list_alpha">
                                <ul>
                                    {Data.map((items: dataProps, index: number) => {
                                        return (
                                            <li key={index}>
                                                <div className="item">
                                                    <div className="img_holder">
                                                        <Link to="/tag">
                                                            <img src={items.Img} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="title_holder">
                                                        <Link to="/tag"><span className="text">{items.Catagory}<span className="count">{items.Rank}</span></span></Link>
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
                </div>
            </main>
        </React.Fragment>
    )
}

export default Tages
