import React from 'react';
import SearchBar from '../search/searchbar/SearchBar';
import ContentComponent from './content/ContentComponent';

const Home = () => {
    return (
        <>
            <SearchBar />
            <ContentComponent />
        </>
    );
}

export default Home;