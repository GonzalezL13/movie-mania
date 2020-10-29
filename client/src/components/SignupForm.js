import Auth from '../utils/auth';
import { createUser } from '../utils/API';
import { useState } from 'react';


const SignupForm = () => {
    const[userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
}