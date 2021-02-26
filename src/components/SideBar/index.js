import React from 'react';
import './styles.css';
// import { useHistory } from 'react-router-dom';
import Person from '../../assets/Mask Group 131.svg';
import logoMenu from '../../assets/logoMenu.png';
import helpIcon from '../../assets/help-icon.svg';
import exitIcon from '../../assets/Mask Group 8.svg';

export default function DashboardMenu() {
    // const history = useHistory();

    return (
       <div id="menuSidebar">
           <div className="containerMenu">
               <div>
                    <div className="menuLogo">
                        <img src={logoMenu} alt="Pes" />
                    </div>
                   <div id="menuItem">
                        <img src={Person} alt="Pes" /> 
                        <span>Contatos</span>
                   </div>
                   {/* `${clicked ? 'classecliked' : 'menuItem'}` */}
                   <div id="menuItem">
                        <img src={helpIcon} alt="Pes" />
                        <span>Sobre</span>
                   </div>
               </div>

               <div id="menuItem">
                    <img src={exitIcon} alt="Pes" />

                    <span>Sair</span>

               </div>
           </div>
       </div>
    );
}