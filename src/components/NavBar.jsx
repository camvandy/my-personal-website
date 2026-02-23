import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import githubIcon from "../assets/images/githubSmall.png";
import linkedinIcon from "../assets/images/linkedinSmall.svg";
import Pdf from "../assets/Cameron_Vandermeersch_Resume.pdf";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand as={HashLink} to="#home" onClick={() => onUpdateActiveLink('home')}>
                        <span className="logo">Cameron</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#home"
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('skills')}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('projects')}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a
                                    href="https://github.com/camvandy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/cameronvandermeersch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={linkedinIcon} alt="LinkedIn" />
                                </a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let&apos;s Connect</span></button>
                            </HashLink>
                            <button
                                className="vvd"
                                onClick={() =>
                                    window.open(Pdf, "_blank", "noopener,noreferrer")
                                }
                            >
                                <span>Download CV</span>
                            </button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}
