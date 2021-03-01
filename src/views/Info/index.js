import React from 'react';
import SideBar from '../../components/SideBar';
import HeaderMenu from '../../components/Header';
import logo from '../../assets/logo@2x.png';
import imgAirPlane from '../../assets/Layer 1.svg';
import './styles.css';

export default function Dashboard() {
    
    return (
        <div className="container">
            <div className="menuDashboard">
                <SideBar clickedInfo={true}/>
            </div>
            <div className="cardDashboard">
                <HeaderMenu />
                <div className="containerInfo">
                    <div className="gempeLogo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="spanInfo">
                        <span>
                            Esse é um teste prático da <b>Gempe</b> para desenvolvedor FullStack.
                            Qualquer dúvida envie um e-mail para <b>rafael@gempe.com.br</b> com 
                            assunto <b>Seu Nome | Dúvida Teste FullStack</b>
                        </span>
                    </div>
                    <div className="gempeAirPlane">
                        <img src={imgAirPlane} alt="ImgAirPlane"/>
                    </div>
                </div>
            </div>
        </div>
    );
}