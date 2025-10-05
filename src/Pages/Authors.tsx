import React from 'react'
import { AuthorsData } from '../Data/AuthorsContant';
import { Link } from 'react-router-dom'

interface authorProps {
    img: string,
    name: string,
    contry: string,
    post: string,
}

const Authors = () => {
    document.title = "Authors | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <div className="mosso-fn-wrapper">
                <div className="mosso_fn_authors_page">
                    <div className="mosso_fn_pagetitle">
                        <div className="container">
                            <div className="pagetitle">
                                <h1 className="title">Authors</h1>
                                <p className="desc">Explore our diverse team of talented writers bringing you insightful content on a wide range of topics.</p>
                            </div>
                        </div>
                    </div>
                    <section id="authors_page_authors">
                        <div className="container">
                            <div className="fn__authors_list">
                                <ul>
                                    {
                                        AuthorsData.map((items: authorProps, index: number) => {
                                            return (
                                                <li key={index}>
                                                    <div className="item">
                                                        <div className="img_holder">
                                                            <Link to="/author">
                                                                <img src={items.img} alt="img is loding..." />
                                                            </Link>
                                                        </div>
                                                        <div className="title_holder">
                                                            <h3 className="title"><Link to="/author">{items.name}</Link></h3>
                                                            <div className="fn__metas">
                                                                <span className="cat">{items.contry}</span>
                                                                <span className="author">{items.post}</span>
                                                            </div>
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
            </div>
        </React.Fragment>
    )
}

export default Authors
