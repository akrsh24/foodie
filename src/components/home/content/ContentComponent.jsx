import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDineCategories, getCollectionCategories } from '../../../redux/actions/DineAction';
import CollectionsCategory from './category/collections/CollectionCategory';
import DineCategory from './category/dine/DineCategory';
import styles from "./ContentComponent.module.css";

const ContentComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDineCategories());
        dispatch(getCollectionCategories());
    });

    return (
        <div className={styles.contentContainer}>
            <DineCategory />
            <CollectionsCategory />
        </div>
    );
}

export default ContentComponent;