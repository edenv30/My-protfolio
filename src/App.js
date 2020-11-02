import { Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import {
  showNavigationbar,
  showBlog,
} from "./assests/configurations.json";

import Navbar from './components/Navbar';
import Landingpage from './components/home/Landingpage';
import AboutMe from './components/home/AboutMe';
import Projects from './components/home/Projects';
import Contact from './components/home/Contact';
import Skills from './components/home/Skills';
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";

const Home = () => {
  return(
    <Fragment>
      <Landingpage />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </Fragment>
  );
};

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {showNavigationbar && <Navbar />}
      <Route path="/" exact component={Home} />
    </BrowserRouter>
);

export default App;

// {showBlog && <Route path="/blog" exact component={Blog} />}
// {showBlog && <Route path="/blog/:id" component={BlogPost} />}
