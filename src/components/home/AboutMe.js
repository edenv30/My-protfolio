import React, { useState, useEffect } from "react";
import axios from "axios";
import Pdf from "../../assests/resume.pdf";
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
} from "../../assests/configurations.json";
import { bounce, bounceIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


const pulseAnimation = Radium.keyframes(
  {
    '0%': {width: '10%'},
    '50%': {width: '70%'},
    '100%': {width: '10%'},
  },
  'pulse',
);

const blendAnimation = Radium.keyframes(
  {
    '0%': {background: 'red'},
    '25%': {background: 'yellow'},
    '50%': {background: 'green'},
    '75%': {background: 'blue'},
    '100%': {background: 'red'},
  },
  'blend',
);

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  bounceIn: {
    animation: 'x 2s ease infinite',
    animationName: Radium.keyframes(bounceIn, 'bounceIn')
  },
  inner: {
        animationName: [pulseAnimation, blendAnimation],
        animationDuration: '2.5s, 8s',
        animationIterationCount: 'infinite, infinite',
        animationTimingFunction: 'linear, cubic-bezier(0.1, 0.7, 1.0, 0.1)',
        height: '2px',
        margin: '0 auto',
      },
};

// const styles = {
//   inner: {
//     animationName: [pulseAnimation, blendAnimation],
//     animationDuration: '2.5s, 8s',
//     animationIterationCount: 'infinite, infinite',
//     animationTimingFunction: 'linear, cubic-bezier(0.1, 0.7, 1.0, 0.1)',
//     height: '2px',
//     margin: '0 auto',
//   },
// };


// {aboutDescription.split('\n').map(line => <p>{line}</p>)}
const AboutMe = () => {

    const [showInsta, setShowInsta] = useState(showInstaProfilePic);
    const [resumeURL] = useState(Pdf);

    const contactPage = <a className="nav-link lead" href={process.env.PUBLIC_URL + "/#contactme"} >
                          <b>Contact</b>
                        </a>;

    return(
      <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          {showInsta && (
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                // src={instaProfilePic}
                src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png"
                alt="profilepicture"
              />
            </div>
          )}
          <div className={`col-lg-${showInsta ? "7" : "12"}`}>
            <StyleRoot>
              <h1 className="display-4 text-center" style={styles.bounceIn}>{aboutHeading}</h1>
              <p style={styles.inner} />
            </StyleRoot><br />
            <p className="lead text-center">
              {aboutDescription.split('\n').map((item, key) => {
                return <span key={key}>{item.replace('contact page', {contactPage} )}<br/></span>
              })}
            </p>
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
    )
};  

export default AboutMe;