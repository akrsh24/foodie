import React, { useState } from 'react';
import { AimOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "./SearchBar.scss";

const SearchBar = () => {

    const [coordinates, setCoordinates] = useState({});

    const getLocation = () => {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setCoordinates({ latitude, longitude });
            }, showError);
    }

    const showError = (error) => {
        console.log(error);
        switch (error.code) {
            case error.PERMISSION_DENIED:
                return "User denied the request for Geolocation.";
            case error.POSITION_UNAVAILABLE:
                return "Location information is unavailable.";
            case error.TIMEOUT:
                return "The request to get user location timed out.";
            case error.UNKNOWN_ERROR:
                return "An unknown error occurred.";
            default: return "An unknown error occurred.";
        }
    }

    console.log("Coordinates", coordinates);

    return (
        <div className="search-menu-div">
            <div className="search-menu-overlay">
                <div className="search-menu-bg" />
                <div className="search-menu-content">
                    <div className="login-span">
                        <div>Login</div>
                        <div>Signup</div>
                    </div>
                    <div className="app-logo-description-div">
                        <div className="logo">Foodie</div>
                        <div className="description">Discover the best food & drinks</div>
                        <div className="search-bar">
                            <Input
                                addonBefore={<AimOutlined onClick={getLocation} />}
                                addonAfter={<SearchOutlined />}
                                size="large"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;