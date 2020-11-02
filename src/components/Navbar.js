import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showBlog, FirstName } from "../assests/configurations.json";
import Pdf from "../assests/resume.pdf";


const Navbar = () => {

    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const checkIstop = window.scrollY < 200;
            if(checkIstop !== isTop) {
                setIsTop(checkIstop);
            }
        });
    }, [isTop]);

    return(
        <nav
            className={`navbar navbar-expand-lg fixed-top navbar-light
            ${isTop ? "bg-transparent" : "bg-gradient"}`}
        >
            <a className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
                {`<${FirstName} />`}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {showBlog && (
                    <li className="nav-item">
                        <Link
                            className="nav-link lead"
                            to={process.env.PUBLIC_URL + "/blog"}
                            >
                            Blog
                        </Link>
                    </li>
                    )}
                    <li className="nav-item">
                        <a
                        className="nav-link lead"
                        href={process.env.PUBLIC_URL + "/#aboutme"}
                        >
                        <b>About</b>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="nav-link lead"
                        href={process.env.PUBLIC_URL + "/#projects"}
                        >
                        Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="nav-link lead"
                        href={Pdf}
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                        <b>Resume</b>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="nav-link lead"
                        href={process.env.PUBLIC_URL + "/#contactme"}
                        >
                        <b>Contact</b>
                        </a>
                    </li>
                </ul>
          </div>
        </nav>
    );
};

export default Navbar;