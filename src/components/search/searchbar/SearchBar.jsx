import React, { useEffect, useState } from 'react';
import { AimOutlined, EnvironmentTwoTone, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "./SearchBar.scss";
import { getGeoLocation, showError } from '../../../util/SearchUtil';
import { getSessionStorageValues, messageUtil } from '../../../util/Util';
import { useDispatch, useSelector } from 'react-redux';
import { setCoordinates, setIsLoading } from '../../../redux/actions/UtilAction';
import { getCityDetails } from '../../../redux/actions/DineAction';

const SearchBar = () => {
    const dispatch = useDispatch();
    const { cityDetails, currentCoordinates } = useSelector(state => ({
        cityDetails: state.dineReducer.cityDetails,
        currentCoordinates: state.dineReducer.currentCoordinates
    }));

    const [currentCityDetails, setCurrentCityDetails] = useState([]);
    const [localCoordinates, setLocalCoordinates] = useState({});

    useEffect(() => {
        setCurrentCityDetails(cityDetails);
    }, [cityDetails]);

    useEffect(() => {
        setLocalCoordinates(currentCoordinates);
    }, [currentCoordinates]);

    const getLocation = async () => {
        let coordinatesLocalValue = getSessionStorageValues("currentCoordinates");
        let cityLocalValue = getSessionStorageValues("currentCityDetails");
        if (!coordinatesLocalValue || !cityLocalValue) {
            try {
                dispatch(setIsLoading(true));
                let geoResponse = await getGeoLocation();
                let { latitude, longitude } = geoResponse.coords;
                sessionStorage.setItem("currentCoordinates", JSON.stringify({ latitude, longitude }));
                dispatch(setCoordinates({ latitude, longitude }));
                dispatch(getCityDetails(latitude, longitude));
                dispatch(setIsLoading(false));
            }
            catch (error) {
                console.error(error);
                const msg = showError(error.code);
                messageUtil("error", msg);
            }
        }
        else {
            setLocalCoordinates(coordinatesLocalValue);
            setCurrentCityDetails(cityLocalValue);
        }
    }

    console.log("Searchbar states", localCoordinates, currentCityDetails.data, Boolean(currentCityDetails.length > 0));

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
                                addonBefore={
                                    <>
                                        {
                                            currentCityDetails && Object.keys(currentCityDetails).length > 0 ?
                                                <>
                                                    <EnvironmentTwoTone style={{ marginRight: "5%" }} />
                                                    {currentCityDetails.data[0].name}
                                                </>
                                                :
                                                <AimOutlined onClick={getLocation} />
                                        }
                                    </>
                                }
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