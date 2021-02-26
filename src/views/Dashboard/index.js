import React from 'react';
import DashboardMenu  from '../../components/Menu';

import './styles.css';

export default function Dashboard() {
    return (
        <div className="container">
            <div className="menuDashboard">
                <DashboardMenu />
            </div>
            <div className="cardDashboard">

            </div>
        </div>
    );
}