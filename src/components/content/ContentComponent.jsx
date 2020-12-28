import React from 'react';
import DineCategory from './category/DineCategory';
import "./ContentComponent.scss";

const ContentComponent = () => {
    return (
        <div className="content-container">
            <DineCategory />
        </div>
    );
}

export default ContentComponent;