import React from 'react';
import { AimOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "./SearchBar.scss";
import { getGeoLocation, showError } from '../../util/SearchUtil';
import { messageUtil } from '../../util/Util';
import { useDispatch } from 'react-redux';
import { setCoordinates } from '../../redux/actions/UtilAction';

const SearchBar = () => {

    const dispatch = useDispatch();

    const getLocation = async () => {
        try {
            let geoResponse = await getGeoLocation();
            let { latitude, longitude } = geoResponse.coords;
            dispatch(setCoordinates({ latitude, longitude }));
        }
        catch (error) {
            console.error(error);
            const msg = showError(error.code);
            messageUtil("error", msg);
        }
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