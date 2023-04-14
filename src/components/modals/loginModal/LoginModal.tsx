import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import isEmail from 'validator/lib/isEmail';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import '../style.scss';

type LoginModalProps = {
    show: boolean;
    handleClose: () => void;
};

const LoginModal = ({ show, handleClose }: LoginModalProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
 
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isEmail(email)) {
            alert('Invalid email format');
            return;
        }
        handleClose();
    };
    const handleLoginButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        handleSubmit(event as any);
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        className="form"
                        onSubmit={handleSubmit}
                    >
                        <Form.Group
                            controlId="formBasicEmail"
                            className="form__group"
                        >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                className="password-input"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            controlId="formBasicPassword"
                            className="form__group"
                        >
                            <Form.Label>Password</Form.Label>
                            <div className="password-input">
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
                                />
                                {showPassword ? (
                                    <FiEye onClick={togglePasswordVisibility} />
                                ) : (
                                    <FiEyeOff
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="form__group">
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleLoginButtonClick}
                    >
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LoginModal;
