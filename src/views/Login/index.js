import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { Button, Input } from 'antd';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startSessionRequest, clearData } from '../../store/actions/user.actions';

import './styles.css';

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector(state => state.user.data);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        console.log(data);
        if(data !== undefined && data.type === 'User') {
            console.log(data.message);
        } else if (data !== undefined && data.type === 'Password'){
            console.log(data.message);
        } else if (data.token){
            console.log(data.token);
            history.push('/contacts')
            dispatch(clearData());
        }
    }, [data])

    async function handleSubmit() {
        if(!email || !password) {
            Swal.fire("ATENÇÃO", "Necessário informar um email e uma senha!", 'info');
            return;
        }
        let dataa = {
            email,
            password
        }
        dispatch(startSessionRequest(dataa)); 
        
        // if(data.data) {
        //     console.log(data);
        //     history.push('/contacts');
        // }
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
                        <Input placeholder="Digite o email de acesso" id="inputLogin" onChange={(e) => setEmail(e.target.value)} type="email"/>
                    </div>
                    <div>
                        <p>Senha</p>
                        <Input placeholder="Digite a senha de acesso" id="inputLogin" onChange={(e) => setPassword(e.target.value)} type="password"/>
                    </div>
                    
                    <Button id="buttonLogin" onClick={() => handleSubmit()}>Entrar</Button>
                    
                </div>
            </div>
        </div>
    );
}