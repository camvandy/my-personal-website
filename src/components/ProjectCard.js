import { Col } from "react-bootstrap";

export const ProjectCard = ({
    title,
    description,
    imgUrl,
    linkUrl,
    technologies,
    details
}) => {
    const handleClick = () => {
        if (linkUrl) {
            window.open(linkUrl, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <Col size={12} sm={6} md={4}>
            <div
                className={`proj-imgbx ${linkUrl ? 'clickable' : ''}`}
                onClick={handleClick}
                style={{ cursor: linkUrl ? 'pointer' : 'default' }}
            >
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <div className="project-meta">
                        <span className="project-desc">{description}</span>
                    </div>
                    {technologies && technologies.length > 0 && (
                        <div className="tech-stack">
                            {technologies.slice(0, 4).map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 4 && (
                                <span className="tech-tag more">+{technologies.length - 4}</span>
                            )}
                        </div>
                    )}
                    <div className="project-action">
                        <span className="view-project">View Project</span>
                        <span className="arrow">→</span>
                    </div>
                </div>
            </div>
        </Col>
    );
};
