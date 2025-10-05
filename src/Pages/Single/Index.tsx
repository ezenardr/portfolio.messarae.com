import React from 'react'

import PostContent from './PostContent';
import SinglePost from './SinglePost';
import Primium from '../../Common/Primium';
import SinglePostTop from './SinglePostTop';

const Single = () => {
    document.title = "Single | Mosso - Personal Portfolio React Js Template"
    return (
        <React.Fragment>
            <div className="mosso-fn-wrapper">
                <main className="mosso_fn_content">
                    <div className="mosso_fn_single_page">
                        <SinglePostTop />
                        <PostContent />
                        <SinglePost />
                        <Primium />
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Single
