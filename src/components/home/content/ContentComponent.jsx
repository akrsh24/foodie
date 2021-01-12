import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDineCategories } from '../../../redux/actions/DineAction';
import CollectionsCategory from './category/collections/CollectionCategory';
import DineCategory from './category/dine/DineCategory';
import "./ContentComponent.scss";

const ContentComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDineCategories());
    });

    return (
        <div className="content-container">
            <DineCategory />
            <CollectionsCategory />
        </div>
    );
}

export default ContentComponent;