import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { Button, Input  } from 'antd';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startSessionRequest, clearData } from '../../store/actions/user.actions';
import sweetalert2 from 'sweetalert2';

import './styles.css';

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector(state => state.user.data);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    
    useEffect(() => {
        setToken(localStorage.getItem('@token'));
        if(data !== undefined && data.type === 'User') {
            Swal.fire('Atenção!', data.message, 'info');
        } else if (data !== undefined && data.type === 'Password'){
            Swal.fire('Atenção', data.message, 'info');
        } else if(token){
            history.push('/contacts');
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
        setToken(localStorage.getItem('@token'));
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
                        <Input onKeyPress={ (e) => e.which === 13 ? handleSubmit() : ''} placeholder="Digite o email de acesso" id="inputLogin" onChange={(e) => setEmail(e.target.value)} type="email"/>
                    </div>
                    <div>
                        <p>Senha</p>
                        <Input onKeyPress={ (e) => e.which === 13 ? handleSubmit() : ''} placeholder="Digite a senha de acesso" id="inputLogin" onChange={(e) => setPassword(e.target.value)} type="password"/>
                    </div>
                    
                    <Button id="buttonLogin" onClick={() => handleSubmit()}>Entrar</Button>
                    
                </div>
            </div>
        </div>
    );
}