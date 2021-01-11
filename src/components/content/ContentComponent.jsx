import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDineCategories } from '../../redux/actions/DineAction';
import DineCategory from './category/DineCategory';
import "./ContentComponent.scss";

const ContentComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDineCategories());
    });

    return (
        <div className="content-container">
            <DineCategory />
        </div>
    );
}

export default ContentComponent;