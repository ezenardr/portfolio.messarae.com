import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const LordMore = () => {
  return (
    <React.Fragment>

      <div className="fn__blog_pagination">
        <Marquee>
          <div className="marquee_wrapper">
            <div className="marquee">
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
              <div className="item">Load More</div>
            </div>
          </div>
        </Marquee>
        <Link to="https://messarae.com" target='_blank' className="load_more" style={{ marginTop: "-48px" }}>
          <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 298 123.8" xmlSpace="preserve">
            <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
          </svg>
        </Link>

      </div>
    </React.Fragment>
  )
}

export default LordMore
