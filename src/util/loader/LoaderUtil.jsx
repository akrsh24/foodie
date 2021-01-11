import { HourglassOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

export const LoaderUtil = (props) => {
    const { isLoading } = useSelector(state => ({
        isLoading: state.utilReducer.isLoading
    }));

    return (
        <Spin spinning={isLoading} size="large"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)"
            }}
            indicator={<HourglassOutlined style={{ fontSize: "40px" }} spin />}
        >
            {props.children}
        </Spin>
    );
}
