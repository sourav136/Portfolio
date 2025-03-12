import React from 'react';
import './WorksPage.css'
import Works from '../../components/Works/Works';
import Footer from '../../components/Footer/Footer';

const WorksPage = () => {
    return (
        <div>
            <div className="workspage">
                <Works/>
                <Footer/>
            </div>
        </div>
    );
};

export default WorksPage;