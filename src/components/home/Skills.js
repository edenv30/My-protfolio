import { FaReact, FaNode, FaPython } from 'react-icons/fa';
import { SiRedux, SiMaterialUi, SiJavascript, SiCss3, SiHtml5, SiBootstrap, SiJava,
        SiMongodb, SiFirebase
        } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

import { flipOutY, bounceInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = { 
    flipOutY: {
        animation: 'x 0.8s ease infinite',
        animationName: Radium.keyframes(flipOutY, 'flipOutY')
    },
    bounceInLeft: {
        animation: 'x 3s ease infinite',
        animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
      }
  }
//   '#0277BD #FFC107'  - python colors
const Skills = () => {
    return(
        <div id="skills">
            <StyleRoot style={{maxWidth: '100%', overflowX: 'hidden'}}>
                <h1 className="display-4 text-center" style={styles.bounceInLeft}>My tech stack</h1>
            </StyleRoot><br />
            <div className="col-12 col-sm-12 col-md-7 mx-auto">
                <div className="d-flex justify-content-around row text-center">
                    <div className="column">
                        <span><FaReact size={50} style={{fill: '#80DEEA'}} /></span>
                        <p>React.js</p>
                    </div>
                     <div className="column">
                        <span><SiRedux size={50} style={{ fill: '#7E57C2' }}  /></span>
                        <p className="text-center">Redux</p>
                    </div>
                    <div className="column">
                        <span><SiJavascript size={50} style={{ fill: '#FFD600' }}  /></span>
                        <p>Javascript</p>
                    </div>
                    <div className="column">
                            <span><SiCss3 size={50} style={{ fill: '#0277BD' }} /></span>
                            <p>CSS</p>
                        </div>
                        <div className="column">
                           <span><SiHtml5 size={50} style={{ fill: '#E65100' }} /></span>
                            <p>HTML</p>
                       </div>
                        <div className="column">
                            <span><SiBootstrap size={50} style={{ fill: '#673AB7' }} /></span>
                            <p>Bootstrap</p>
                        </div>
                        <div className="column">
                            <span><SiMaterialUi size={50} style={{ fill: '#29B6F6' }} /></span>
                            <p>Material UI</p>
                        </div>  
                    </div>
                <div className="d-flex justify-content-around row text-center">
                    <div className="column">
                        <span><FaPython size={50} style={{ fill: '#FFE873' }} /></span>
                        <p>Python</p>
                    </div>
                    <div className="column">
                        <span><FaNode size={50} style={{ fill: '#37474F' }} /></span>
                        <p>Node.js</p>
                    </div>   
                    <div className="column">
                        <span><SiJava size={50} style={{ fill: '#e71f2f' }} /></span>
                        <p>Java</p>
                    </div>
                </div>
                <div className="justify-content-around d-flex  row text-center">
                    <div className="column">
                        <span><AiOutlineConsoleSql size={50} style={{ fill: '#e71f2f' }} /></span>
                        <p>SQL</p>
                    </div>
                    <div className="column">
                        <span><SiMongodb size={50} style={{ fill: '#4CAF50' }} /></span>
                        <p>Mongodb</p>
                    </div>
                    <div className="column">
                        <span><SiFirebase size={50} style={{ fill: '#FF8F00' }} /></span>
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    )
};  

export default Skills;