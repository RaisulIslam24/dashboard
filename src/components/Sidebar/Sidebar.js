import './Sidebar.css';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                        <>
                            <h3 className="sidebarTitle">Admin Panel</h3>
                            <ul className="sidebarList">
                                <div className="sidebarListItem link ">
                                    All Services
                                </div>
								<div className="sidebarListItem link ">
                                    Posted Services
                                </div>
                                <div className="sidebarListItem link">
                                    Service Consumers
                                </div>
                                <div className="sidebarListItem link">
                                    Service Providers
                                </div>
                                <div className="sidebarListItem link">
                                   All Orders
                                </div>
                            </ul>
                        </>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;