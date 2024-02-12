import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
	return (
		<section className="dashboardList">
                <Sidebar />
                <div className="dashboardListRight">
					<p className='text-center'>No data available</p>
                </div>
        </section>
	);
};

export default Dashboard;