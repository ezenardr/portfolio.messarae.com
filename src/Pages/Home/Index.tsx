import React from 'react'
import SpringFashion from './SpringFashion';
// import ProductCatagory from './ProductCatagory';
import LatestProjects from '../../Common/LatestProjects';
import LordMore from '../../Common/LordMore';

const Index = () => {
  document.title = "Messara Ezenard | Personal Portfolio";
  return (
    <React.Fragment>
      <div className="mosso-fn-wrapper">
        <main className="mosso_fn_content">
          <div className="mosso_fn_homepage">
            <SpringFashion />
            {/* <ProductCatagory /> */}
            <section id="home_latest_posts">
              <div className="fn__section_title">
                <div className="container">
                  <div className="section_title_container">
                    <h3 className="fn__title"><span className="text">Projets</span></h3>
                    <span className="title_decor"></span>
                  </div>
                </div>
              </div>
              <LatestProjects />
              <LordMore />
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default Index
