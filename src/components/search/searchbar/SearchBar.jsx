import React, { useCallback, useEffect, useState } from 'react';
import { AimOutlined, EnvironmentTwoTone, SearchOutlined } from '@ant-design/icons';
import { Input, Popover } from 'antd';
import styles from "./SearchBar.module.css";
import { getGeoLocation, showError } from '../../../util/SearchUtil';
import { getSessionStorageValues, messageUtil } from '../../../util/Util';
import { useDispatch, useSelector } from 'react-redux';
import { setCoordinates, setIsLoading } from '../../../redux/actions/UtilAction';
import { getCityDetails, setCityDetails } from '../../../redux/actions/DineAction';

const SearchBar = () => {
    const dispatch = useDispatch();
    const { cityDetails } = useSelector(state => ({
        cityDetails: state.dineReducer.cityDetails,
    }));

    const [currentCityDetails, setCurrentCityDetails] = useState({});

    const getLocation = useCallback(async () => {
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
                const latitude = "12.9716", longitude = "77.5946";
                sessionStorage.setItem("currentCoordinates", JSON.stringify({ latitude, longitude }));
                dispatch(setCoordinates({ latitude, longitude }));
                dispatch(getCityDetails(latitude, longitude));
                const msg = showError(error.code);
                messageUtil("error", msg);
            }
        }
        else {
            dispatch(setCoordinates(coordinatesLocalValue));
            dispatch(setCityDetails(cityLocalValue));
        }
    }, [dispatch]);

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    useEffect(() => {
        if (cityDetails.hasOwnProperty("data"))
            setCurrentCityDetails(cityDetails.data[0]);
    }, [cityDetails]);

    const locateMe = (
        <div onClick={getLocation} className={styles.locateMeDiv}>
            <AimOutlined />  Detect current location
        </div>
    )

    return (
        <div className={styles.searchMenuDiv}>
            <div className={styles.searchMenuOverlay}>
                <div className={styles.searchMenuBg} />
                <div className={styles.searchMenuContent}>
                    <div className={styles.loginSpan}>
                        <div>Login</div>
                        <div>Signup</div>
                    </div>
                    <div className={styles.appLogoDescriptionDiv}>
                        <div className={styles.logo}>Foodie</div>
                        <div className={styles.description}>Discover the best food & drinks</div>
                        <div className={styles.searchBar}>
                            <Input
                                addonBefore={
                                    <Popover content={locateMe} placement="bottom" trigger="hover">
                                        <EnvironmentTwoTone style={{ marginRight: "5%" }} />
                                        {currentCityDetails.name}
                                    </Popover>
                                }
                                addonAfter={<SearchOutlined />}
                                size="large"
                            />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default SearchBar;