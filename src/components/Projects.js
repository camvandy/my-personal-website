import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import AIEye from "../assets/images/AIEye.jpeg";
import tttImage from "../assets/images/tttImage.jpeg";
import portfolio from "../assets/images/portfolio.jpg"; // Keep for background image
import tourify from "../assets/images/tourify.jpg";
import UHelp from "../assets/images/UHelp.jpg";
import hospitalImg from "../assets/images/hospitalImg.jpg";
import sortingImg from "../assets/images/sortingImg.gif";
import weatherImg from "../assets/images/weatherImg.gif";
import hotelImg from "../assets/images/hotelImg.gif";
import airportImg from "../assets/images/airportImg.jpg";
import calculatorImg from "../assets/images/calculatorImg.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const tab1 = [
        {
            title: "Personal Portfolio Website",
            description: "Modern Web Application • React & JavaScript",
            imgUrl: portfolio,
            linkUrl: "https://github.com/camvandy/my-personal-website",
            technologies: ["React", "JavaScript", "CSS"],
        },
        {
            title: "AI Powered Monitoring System",
            description: "AI Computer Vision Platform",
            imgUrl: AIEye,
            linkUrl: "https://github.com/ai-monitoring-system",
            technologies: ["Python", "OpenCV", "YOLO", "JavaScript"],
        },
        {
            title: "UHelp",
            description: "Student Support Platform • Full Stack",
            imgUrl: UHelp,
            linkUrl: "https://github.com/orgs/uhelp-dev/repositories",
            technologies: ["TypeScript", "React", "SCSS", "Next.js", "Node.js", "Flask", "SQL"],
            details: "A website created for students to connect and get help on their academic and personal goals."
        },
        {
            title: "Tourify",
            description: "Tourism Discovery Platform • Mobile App",
            imgUrl: tourify,
            linkUrl: "https://github.com/BorhanSaflo/tourify",
            technologies: ["Kotlin", "Express.js", "TypeScript", "SQLite"],
            details: "A mobile app designed to help you discover and navigate your next tourism destination."
        },
        {
            title: "Hospital Management System",
            description: "Healthcare Administration Platform • Patient & Staff Management",
            imgUrl: hospitalImg,
            linkUrl: "https://github.com/Hospital-Management-System-Project/HospitalManagementSystem",
            technologies: ["C++", "Qt", "QMake", "CMake"],
        },
        {
            title: "Sorting Algorithm Visualizer",
            description: "Educational Tool • Data Structures & Algorithms",
            imgUrl: sortingImg,
            linkUrl: "https://github.com/camvandy/Sorting-Algorithum",
            technologies: ["Python", "Tkinter", "Ttkbootstrap", "NumPy"],
            details: "A Sorting Visualizer that illustrates how sort algorithms such as Bubble Sort, Selection Sort, and others work with different array sizes and speeds."
        },
    ];

    const tab2 = [
        {
            title: "Simple Weather App",
            description: "Weather Information Tool • Frontend Development",
            imgUrl: weatherImg,
            linkUrl: "https://github.com/camvandy/Simple-Weather-App",
            technologies: ["HTML", "CSS", "JavaScript", "API"],
        },
        {
            title: "Hotel Management System",
            description: "Hospitality Software • Object-Oriented Design",
            imgUrl: hotelImg,
            linkUrl: "https://github.com/camvandy/Simple-Hotel-Management-System",
            technologies: ["Java", "OOP", "GUI", "Database"],
        },
        {
            title: "Airport Simulator",
            description: "Flight Operations Simulator • Object-Oriented Programming",
            imgUrl: airportImg,
            linkUrl: "https://github.com/camvandy/Airport-Simulator",
            technologies: ["Java", "OOP", "Stacks & Queues", "Data Structures"],
            details: "An Airport Take-Off and Landing Simulator constructed using Java (OOP), using Stacks & Queues. The simulator includes: Adding/Removing planes to/from the landing queue, Adding/Removing planes to/from the take-off queue, Queueing the next step for a flight and its processing to take-off and land, Forwarding all the data in the queues, and Outputting all the data in the queues to a file."
        },
        {
            title: "Command Line Calculator",
            description: "Mathematical Tool • C Programming",
            imgUrl: calculatorImg,
            linkUrl: "https://github.com/camvandy/CL-Calculator",
            technologies: ["C", "CLI", "Mathematics"],
        },
        {
            title: "Tic-Tac-Toe Game",
            description: "Interactive Game • Game Development",
            imgUrl: tttImage,
            linkUrl: "https://github.com/camvandy/Tic-Tac-Toe-Game",
            technologies: ["Java", "Game Logic", "GUI"],
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible ? "animate__animated animate__fadeIn" : ""
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        Throughout my personal project history, I have strived for
                                        educational enrichment to better my understanding of
                                        computer science as well as the furtherment of science. To
                                        achieve this purpose, I&apos;ve researched innovative approaches
                                        to modern technology as seen below.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible ? "animate__animated animate__slideInUp" : ""
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {tab1.map((tab1, index) => {
                                                        return <ProjectCard key={index} {...tab1} />;
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {tab2.map((tab2, index) => {
                                                        return <ProjectCard key={index} {...tab2} />;
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    <p>
                                                        In Progress! Exciting New Projects To Be Released
                                                        Soon :)
                                                    </p>
                                                    {/* {
                          tab3.map((tab3, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...tab3}
                                />
                            )
                          })
                        } */}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={portfolio}></img>
        </section>
    );
};