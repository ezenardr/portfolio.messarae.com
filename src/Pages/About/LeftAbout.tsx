import React from 'react'
import authors from '../../assets/img/authors/3.jpg';

const LeftAbout = () => {
  return (
    <React.Fragment>
      <div className="about_left">
        <div className="about_left_in">
          <div className="img">
            <img src={authors} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LeftAbout
