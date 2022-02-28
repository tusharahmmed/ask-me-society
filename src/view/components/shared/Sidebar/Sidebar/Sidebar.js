import React from 'react';
import AskQuestion from '../AskQuestion/AskQuestion';
import Stats from '../Stats/Stats';
import FindUs from '../FindUs/FindUs';

const Sidebar = () => {
    return (
        <>
            <AskQuestion />
            <Stats />
            <FindUs />
        </>
    );
};

export default Sidebar;

