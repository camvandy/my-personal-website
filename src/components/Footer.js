import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import githubIcon from "../assets/images/githubSmall.png";
import linkedinIcon from "../assets/images/linkedinSmall.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center pt-5">
                    <Col size={12} sm={6}>
                        <span className="Logo">Cameron</span>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a
                                target="_blank"
                                href="https://linkedin.com/in/cameronvandermeersch"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" />
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/camvandy"
                                rel="noopener noreferrer"
                            >
                                <img src={githubIcon} alt="GitHub" />
                            </a>
                        </div>
                        <p>Engineered with Code & Excellence.</p>
                        <p>© 2025 Cameron Vandermeersch. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
