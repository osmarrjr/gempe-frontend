import React from 'react';
import './styles.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useHistory } from 'react-router-dom';
import Person from '../../assets/Mask Group 131.svg';
import logoMenu from '../../assets/logoMenu.png';
import helpIcon from '../../assets/help-icon.svg';
import exitIcon from '../../assets/Mask Group 8.svg';

export default function DashboardMenu() {
    const history = useHistory();

    return (
        <SideNav
            expanded={true}
            onSelect={(selected) => {
                // Add your code here
            }}
        >
        <div className="logoMenu">
            <img src={logoMenu} />
        </div>
        
        <SideNav.Nav defaultSelected="home">
            <NavItem className="navMenu" eventKey="home">
                    
                <NavText>
                <div className="menuIcon">
                    <img  src={Person} /> &nbsp; Contatos
                </div>
                </NavText>
            </NavItem>

            <NavItem eventKey="info">
                    
                <NavText>
                    <div className="menuIcon">
                        <img  src={helpIcon} /> &nbsp; Sobre
                    </div>
                </NavText>
            </NavItem>

            <NavItem eventKey="out">
                   
                <NavText>
                <div className="menuIcon">
                    <img src={exitIcon} /> &nbsp; Sair
                </div>
                </NavText>
            </NavItem>

        </SideNav.Nav>
    </SideNav>
    );
}