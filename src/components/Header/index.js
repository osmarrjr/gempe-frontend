import React from 'react';

import './styles.css'
import helpIconGrey from '../../assets/help-icon grey.svg';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

export default function HeaderMenu(){
    return (
        <>
        <div className="containerHeaderMenu">

            <div className="itemsHeaderMenu">
               <Link to="/info"><img className="helpIconGrey" src={helpIconGrey} alt="Pes" /></Link>
                <span>Olá, <strong> Osmar</strong></span>
            </div>

            <div className="marginHeader">
                <Avatar size="large">O</Avatar>
            </div>
            
        </div>

        <hr />
        </>
    );
}