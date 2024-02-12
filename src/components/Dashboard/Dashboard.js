import React from 'react';
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