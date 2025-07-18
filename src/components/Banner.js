import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/images/header-img.svg";
import Pdf from "../assets/Cameron_Vandermeersch_Resume.pdf";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const toRotate = useMemo(() => ["Web Developer", "Software Engineer", "UI/UX Designer", "AI Engineer"], []);
    const period = 2000;

    useEffect(() => {
        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta(100);
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(100);
            }
        };

        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, isDeleting, loopNum, toRotate, period]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Cameron`}</h1>
                                    <h2>
                                        <span className="txt-rotate" data-period="1000" data-rotate={`[ "Web Developer", "Software Engineer", "UI/UX Designer" ]`}>
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h2>
                                    <p>I&apos;m a Software Engineer with extensive background in web development, AI, and automation technologies. I specialize in creating robust, scalable applications that solve complex technical challenges and deliver measurable business impact.</p>
                                    <p>Currently serving as a Network Automation Software Engineer at Enbridge Gas, where I build intelligent systems for modern infrastructure. As a Computer Science graduate from the University of Windsor, I leverage AI frameworks and cutting-edge technologies to drive operational efficiency across enterprise systems.</p>
                                    <button onClick={() => window.open(Pdf, "_blank", "noopener,noreferrer")}>Download CV <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
