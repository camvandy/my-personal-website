import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const Newsletter = ({ onValidated, status: mailchimpStatus, message: mailchimpMessage }) => {
    const [email, setEmail] = useState("");
    const [buttonText, setButtonText] = useState("Subscribe");
    const [status, setStatus] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // Clear fields when subscription is successful
    useEffect(() => {
        if (status.success === true) {
            clearFields();
        }
    }, [status]);

    // Handle Mailchimp status updates
    useEffect(() => {
        if (mailchimpStatus) {
            setIsLoading(mailchimpStatus === 'sending');
            setButtonText(mailchimpStatus === 'sending' ? 'Subscribing...' : 'Subscribe');

            if (mailchimpStatus === 'success') {
                setStatus({
                    success: true,
                    message: mailchimpMessage || "Thank you for subscribing! You'll receive updates about my latest projects and articles."
                });
                clearFields();
            } else if (mailchimpStatus === 'error') {
                setStatus({
                    success: false,
                    message: mailchimpMessage || "Something went wrong. Please try again later."
                });
            }
        }
    }, [mailchimpStatus, mailchimpMessage]);

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Input validation
        if (!email) {
            setStatus({
                success: false,
                message: "Please enter your email address."
            });
            return;
        }

        if (!validateEmail(email)) {
            setStatus({
                success: false,
                message: "Please enter a valid email address."
            });
            return;
        }

        // If onValidated is provided (Mailchimp integration), use it
        if (onValidated && typeof onValidated === 'function') {
            setIsLoading(true);
            setButtonText("Subscribing...");
            setStatus({});

            onValidated({
                EMAIL: email
            });
            return;
        }

        // Fallback to EmailJS if no Mailchimp integration
        setIsLoading(true);
        setButtonText("Subscribing...");
        setStatus({});

        try {
            // Initialize EmailJS with your public key
            emailjs.init("qCCnCpPfISaMtCqjl");

            // Send email using EmailJS
            const result = await emailjs.send(
                "service_nl6isbc",
                "template_ti6olcx",
                {
                    email: email,
                    subscriber_email: email,
                    to_name: "Newsletter Subscriber",
                    from_name: "Cameron's Portfolio"
                }
            );

            if (result.status === 200) {
                setStatus({
                    success: true,
                    message: "Thank you for subscribing! You'll receive updates about my latest projects and articles."
                });

                // Call the onValidated callback if provided
                if (onValidated && typeof onValidated === 'function') {
                    onValidated({
                        EMAIL: email,
                        status: 'success'
                    });
                }
            } else {
                throw new Error('Failed to send email');
            }

        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Newsletter subscription error:', error);
            setStatus({
                success: false,
                message: "Something went wrong. Please try again later or contact me directly."
            });
        } finally {
            setIsLoading(false);
            setButtonText("Subscribe");
        }
    };

    const clearFields = () => {
        setEmail("");
    };

    // Clear status messages after 5 seconds
    useEffect(() => {
        if (status.message) {
            const timer = setTimeout(() => {
                setStatus({});
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>
                            Stay Updated<br />
                            Never miss my latest projects & insights
                        </h3>
                        <p className="newsletter-description">
                            Get notified about new projects, articles, and tech insights delivered straight to your inbox.
                        </p>
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="new-email-bx">
                                <input
                                    value={email}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    disabled={isLoading}
                                    className={status.success === false ? 'error' : ''}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !email}
                                    className={isLoading ? 'loading' : ''}
                                >
                                    <span>{buttonText}</span>
                                    {isLoading && <span className="spinner"></span>}
                                </button>
                            </div>

                            {/* Status Messages */}
                            {status.success === false && (
                                <Alert variant="danger" className="mt-3">
                                    <i className="fas fa-exclamation-triangle me-2"></i>
                                    {status.message}
                                </Alert>
                            )}
                            {status.success === true && (
                                <Alert variant="success" className="mt-3">
                                    <i className="fas fa-check-circle me-2"></i>
                                    {status.message}
                                </Alert>
                            )}
                        </form>

                        <div className="newsletter-privacy">
                            <small>
                                <i className="fas fa-lock me-1"></i>
                                Your privacy is important. No spam, unsubscribe anytime.
                            </small>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
