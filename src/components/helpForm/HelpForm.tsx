import { useState } from 'react';

import './style.scss';

interface HelpFormFields {
    name: string;
    email: string;
    phoneNumber: string;
    problemDescription: string;
}

const HelpForm = () => {
    const [formFields, setFormFields] = useState<HelpFormFields>({
        name: '',
        email: '',
        phoneNumber: '',
        problemDescription: '',
    });

    const handleFormChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, email, phoneNumber, problemDescription } = formFields;

        if (!name || !email || !phoneNumber || !problemDescription) {
            console.log('Ошибка валидации: не все поля заполнены');
            return;
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            console.log('Ошибка валидации: некорректный email');
            return;
        }

        const phoneRegex = /^\+?[0-9]{10,}$/;
        if (!phoneRegex.test(phoneNumber)) {
            console.log('Ошибка валидации: некорректный номер телефона');
            return;
        }
        console.log('Данные формы отправлены', formFields);
    };


    return (
        <div className="help-form">
            <form
                className="help-form__form"
                onSubmit={handleSubmit}
            >
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formFields.name}
                        onChange={handleFormChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formFields.email}
                        onChange={handleFormChange}
                        required
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formFields.phoneNumber}
                        onChange={handleFormChange}
                        required
                    />
                </label>
                <label>
                    Problem:
                    <textarea
                        name="problemDescription"
                        value={formFields.problemDescription}
                        onChange={handleFormChange}
                        required
                    />
                </label>
                <button
                    className="help-form__btn"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default HelpForm;
