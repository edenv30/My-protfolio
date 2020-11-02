import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,
  gitHubQuerry,
  projectsLength,
} from "../../assests/configurations.json";
// import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const bounceAnimation = Radium.keyframes({
  '25%': { transform: 'rotate(3deg) translateY(-5px)' },
  '50%': { transform: 'rotate(-2deg)' },
  '75%': { transform: 'rotate(1deg)' },
})
const styles = { 
  bounce: {
    animation: 'x 0.8s ease infinite',
    animationName: bounceAnimation
  }
}

const Projects = () => {

    const [projectsArray, setProjectsArray] = useState([]);

    const handleRequest = useCallback((e) => {
        axios
          .get(gitHubLink + gitHubUsername + gitHubQuerry)
          .then((response) => {
            // handle success
            // console.log(response.data.slice(0, 4));
            return setProjectsArray(response.data.slice(0, projectsLength));
          })
          .catch((error) => {
            // handle error
            return console.error(error.message);
          })
          .finally(() => {
            // always executed
          });
      }, []);
    
      useEffect(() => {
        handleRequest();
      }, [handleRequest]);
    

    return(
        <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
            {projectsArray.length && (
                <div className="container container-fluid p-5">
                <StyleRoot>
                  <h1 className="display-4 pb-5" style={styles.bounce}>{projectHeading}</h1>
                </StyleRoot>
                  <div className="row">
                    {projectsArray.map((project) => (
                      <ProjectCard key={project.id} id={project.id} value={project} />
                    ))}
                  </div>
                </div>
              )}
        </div>
    )
};  

export default Projects;