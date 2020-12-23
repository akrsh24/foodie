import { Input } from 'antd';
import React from 'react';
import "./Home.scss";
import { SearchOutlined } from '@ant-design/icons';

const Home = () => {
    return (
        <div className="home-container" >
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
                            <div className="description">
                                Discover the best food & drinks
                            </div>
                            <div className="search-bar">
                                <Input
                                    addonBefore="http://"
                                    addonAfter={<SearchOutlined />}
                                    size="large"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;