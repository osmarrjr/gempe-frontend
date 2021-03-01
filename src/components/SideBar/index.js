import React from 'react';
import './styles.css';
import Person from '../../assets/Mask Group 131.svg';
import logoMenu from '../../assets/logoMenu.png';
import helpIcon from '../../assets/help-icon.svg';
import exitIcon from '../../assets/Mask Group 8.svg';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearData } from '../../store/actions/user.actions';


export default function DashboardMenu({ clickedDashboard = false , clickedInfo = false }) {

    const history = useHistory();
    const dispatch = useDispatch();
    return (
       <div id="menuSidebar">
           <div className="containerMenu">
               <div>
                    <div className="menuLogo">
                        <img src={logoMenu} alt="Pes" />
                    </div>
                   <div>
                   <div onClick={() => history.push('/contacts')} id={!clickedDashboard ? "menuItem" : "menuItemActive"}>
                        <img src={Person} alt="Pes" /> 
                        <span>Contatos</span>
                   </div>
                   <div onClick={() => history.push('/info')} id={!clickedInfo ? "menuItem" : "menuItemActive"}>
                        <img src={helpIcon} alt="Pes" />
                        <span>Sobre</span>
                   </div>
                   </div>
               </div>

               <div onClick={() => (
                   dispatch(clearData()),
                   history.push('/')
               )} id="menuItem">
                    <img src={exitIcon} alt="Pes" />
                    <span>Sair</span>

               </div>
           </div>
       </div>
    );
}