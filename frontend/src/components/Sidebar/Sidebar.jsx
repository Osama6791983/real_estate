import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidebar = ({ dashboardData }) => {
    const [activeId, setActiveId] = useState(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const handleSettingsClick = (id) => {
        setActiveId(id);
        setIsSettingsOpen(prevState => !prevState);
    };

    return (
        <div className='container my-2'>
        <div className='flex flex-col mr-3'>
            {dashboardData.map((item) => (
                <div key={item.id} className='text-sm ml-3 font-semibold'>
                    <Link
                        to={item.href}
                        className={`flex items-center gap-x-4 pl-2 pr-8 py-2 cursor-pointer ${activeId === item.id ? 'active bg-black text-white rounded-lg mx-1' : ''}`}
                        onClick={() => item.id === 9 ? handleSettingsClick(item.id) : setActiveId(item.id)}
                    >
                        <span className='text-lg'>{item.icon}</span>
                        <span className='tracker-wider'>{item.name}</span>
                        {item.ddicon && <span className='ml-auto text-lg'>{item.ddicon}</span>}
                    </Link>
                    {item.submenu && activeId === item.id && isSettingsOpen && (
                        <div className='flex flex-col pl-8 mt-2'>
                            {item.submenu.map(sub => (
                                <Link key={sub.id} to={sub.href}
                                className={`py-1 text-xs hover:bg-slate-600 hover:text-white hover:px-3 hover:rounded-lg ${activeId === sub.id ? 'text-white':''}`}
                                onClick={()=>setActiveId(sub.id)}
                                >
                                    {sub.subname}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
        </div>
    );
};

Sidebar.propTypes = {
    dashboardData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        icon: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        ddicon: PropTypes.node,
        submenu: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            subname: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        }))
    })).isRequired
};

export default Sidebar;
