import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  document.title = "404"
  return (
    <React.Fragment>

      <main className="mosso_fn_content">
        <div className="mosso_fn_404_page">
          <div className="container">
            <div className="fn__404">
              <h1 className="title">404</h1>
              <h2 className="subtitle">Page not Found</h2>
              <p className="desc">Sorry, but the page you are looking for was moved, removed, renamed or might never existed...</p>
              <div className="btn" style={{padding: "0px"}}>
                <Link to="/" className="fn__btn extra">Back To Home</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

    </React.Fragment>
  )
}

export default Error404

