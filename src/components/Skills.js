import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ai from "../assets/images/skills/ai.png";
import atlassian from "../assets/images/skills/atlassian.png";
import aws from "../assets/images/skills/aws.png";
import azure from "../assets/images/skills/azure.png";
import lightroom from "../assets/images/skills/lightroom.png";
import csharp from "../assets/images/skills/csharp.png";
import cpp from "../assets/images/skills/c++.png";
import css from "../assets/images/skills/css.png";
import django from "../assets/images/skills/django.png";
import docker from "../assets/images/skills/docker.png";
import figma from "../assets/images/skills/figma.png";
import firebase from "../assets/images/skills/firebase.png";
import flask from "../assets/images/skills/flask.png";
import flutter from "../assets/images/skills/flutter.png";
import git from "../assets/images/skills/git.png";
import gitlab from "../assets/images/skills/gitlab.png";
import github from "../assets/images/skills/github.png";
import html5 from "../assets/images/skills/html5.png";
import jira from "../assets/images/skills/jira.png";
import jquery from "../assets/images/skills/jquery.png";
import js from "../assets/images/skills/js.png";
import json from "../assets/images/skills/json.png";
import linux from "../assets/images/skills/linux.png";
import mongodb from "../assets/images/skills/mongodb.png";
import mysql from "../assets/images/skills/mysql.png";
import nodejs from "../assets/images/skills/nodejs.png";
import npm from "../assets/images/skills/npm.png";
import openai from "../assets/images/skills/openai.png";
import oracle from "../assets/images/skills/oracle.png";
import postman from "../assets/images/skills/postman.png";
import powershell from "../assets/images/skills/powershell.png";
import prettier from "../assets/images/skills/prettier.png";
import python from "../assets/images/skills/python.png";
import reactjs from "../assets/images/skills/reactjs.png";
import swift from "../assets/images/skills/swift.png";
import tailwind from "../assets/images/skills/tailwind.png";
import ubuntu from "../assets/images/skills/ubuntu.png";
import vs from "../assets/images/skills/vs.png";
import colorSharp from "../assets/images/color-effect1.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 5,
            partialVisibilityGutter: 40,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5,
            partialVisibilityGutter: 40,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: 30,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 30,
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx zoomIn">
                            <h2>Skills</h2>
                            <p>Here are some of the technologies and skills I work with to create amazing web experiences.<br></br> My skillset ranges from the fundamentals of software engineering, including the<br></br> core programming languages, to modern web development frameworks.</p>
                            <Carousel
                                additionalTransfrom={0}
                                autoPlay={true}
                                autoPlaySpeed={1}
                                containerClass="container-with-dots"
                                customTransition="all 10s linear"
                                responsive={responsive}
                                swipeable={true}
                                infinite={true}
                                arrows={false}
                                showDots={false}
                                transitionDuration={10000}
                                slidesToSlide={1}
                                shouldResetAutoplay={false}
                                draggable={true}
                                pauseOnHover={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <img src={ai} alt="Image" />
                                    <h5>AI</h5>
                                </div>
                                <div className="item">
                                    <img src={atlassian} alt="Image" />
                                    <h5>Atlassian</h5>
                                </div>
                                <div className="item">
                                    <img src={aws} alt="Image" />
                                    <h5>AWS</h5>
                                </div>
                                <div className="item">
                                    <img src={azure} alt="Image" />
                                    <h5>Azure</h5>
                                </div>
                                <div className="item">
                                    <img src={lightroom} alt="Image" />
                                    <h5>Lightroom</h5>
                                </div>
                                <div className="item">
                                    <img src={csharp} alt="Image" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={cpp} alt="Image" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={django} alt="Image" />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src={docker} alt="Image" />
                                    <h5>Docker</h5>
                                </div>
                                <div className="item">
                                    <img src={figma} alt="Image" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={firebase} alt="Image" />
                                    <h5>Firebase</h5>
                                </div>
                                <div className="item">
                                    <img src={flask} alt="Image" />
                                    <h5>Flask</h5>
                                </div>
                                <div className="item">
                                    <img src={flutter} alt="Image" />
                                    <h5>Flutter</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={gitlab} alt="Image" />
                                    <h5>GitLab</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="Image" />
                                    <h5>GitHub</h5>
                                </div>
                                <div className="item">
                                    <img src={html5} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={jira} alt="Image" />
                                    <h5>Jira</h5>
                                </div>
                                <div className="item">
                                    <img src={jquery} alt="Image" />
                                    <h5>jQuery</h5>
                                </div>
                                <div className="item">
                                    <img src={js} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={json} alt="Image" />
                                    <h5>JSON</h5>
                                </div>
                                <div className="item">
                                    <img src={linux} alt="Image" />
                                    <h5>Linux</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Image" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={npm} alt="Image" />
                                    <h5>NPM</h5>
                                </div>
                                <div className="item">
                                    <img src={openai} alt="Image" />
                                    <h5>OpenAI</h5>
                                </div>
                                <div className="item">
                                    <img src={oracle} alt="Image" />
                                    <h5>Oracle</h5>
                                </div>
                                <div className="item">
                                    <img src={postman} alt="Image" />
                                    <h5>Postman</h5>
                                </div>
                                <div className="item">
                                    <img src={powershell} alt="Image" />
                                    <h5>PowerShell</h5>
                                </div>
                                <div className="item">
                                    <img src={prettier} alt="Image" />
                                    <h5>Prettier</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={reactjs} alt="Image" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={swift} alt="Image" />
                                    <h5>Swift</h5>
                                </div>
                                <div className="item">
                                    <img src={tailwind} alt="Image" />
                                    <h5>Tailwind</h5>
                                </div>
                                <div className="item">
                                    <img src={ubuntu} alt="Image" />
                                    <h5>Ubuntu</h5>
                                </div>
                                <div className="item">
                                    <img src={vs} alt="Image" />
                                    <h5>VS Code</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
