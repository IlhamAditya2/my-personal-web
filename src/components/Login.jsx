import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function LoginModal() {
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);
    const navigate = useNavigate();


    const handleLogin = async () => {
        const email = inputEmail.current.value;
        const password = inputPassword.current.value;

        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                email,
                password,
            });

            const token = response.data.token;

            localStorage.setItem("token", token);
            console.log("token disimpan", token)
            navigate("/Admin");
        } catch (error) {
            console.error("Login Hanya Untuk Pemilik Website: ", error.response?.data || error.message);
            alert("Login Hanya Untuk Pemilik Website yaa Anjingg")
        }
    };

    return (
        <div>
            <input type="email" ref={inputEmail} placeholder="Email" />
            <input type="password" ref={inputPassword} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );

};
