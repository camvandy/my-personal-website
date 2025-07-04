import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "/src/assets/images/project-img1.png",
        },
        {
            title: "E-commerce Platform",
            description: "Full Stack Development",
            imgUrl: "/src/assets/images/project-img2.png",
        },
        {
            title: "Portfolio Website",
            description: "Frontend Development",
            imgUrl: "/src/assets/images/project-img3.png",
        },
        {
            title: "Mobile App",
            description: "React Native Development",
            imgUrl: "/src/assets/images/project-img1.png",
        },
        {
            title: "Web Application",
            description: "Full Stack Development",
            imgUrl: "/src/assets/images/project-img2.png",
        },
        {
            title: "Dashboard UI",
            description: "UI/UX Design",
            imgUrl: "/src/assets/images/project-img3.png",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here are some of the projects I&apos;ve worked on, showcasing my skills in web development and design.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>More projects coming soon...</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Additional work samples will be displayed here.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
