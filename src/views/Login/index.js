import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Button, Input } from 'antd';

import './styles.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleSubmit() {
        if(!email || !password) {
            console.log('falta');
            return;
        }
        console.log(email, password);
    }

    return (
        <div className="container">
            <div className="containerLogo">
                <div>
                    <img src={Logo} alt="Gempe" />
                </div>
            </div>
            <div className="containerLogin">
                <div className="containerForm">
                    <div>
                        <p>Email</p>
                        <Input placeHolder="Digite o email de acesso" className="inputLogin" onChange={(e) => setEmail(e.target.value)} type="email"/>
                    </div>
                    <div>
                        <p>Senha</p>
                        <Input placeHolder="Digite a senha de acesso" className="inputLogin" onChange={(e) => setPassword(e.target.value)} type="password"/>
                    </div>
                    
                    <Button className="buttonLogin" onClick={() => handleSubmit()}>Entrar</Button>
                    
                </div>
            </div>
        </div>
    );
}