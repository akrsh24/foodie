import React from 'react';
import { AimOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "./SearchBar.scss";

const SearchBar = () => {

    const getLocation=()=>{
      
    }
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