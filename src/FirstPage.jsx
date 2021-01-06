import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

function FirstPage(props) {
    useEffect(() => props.history.push("/foodie/"))
    return (
        <div>
        </div>
    );
}

export default withRouter(FirstPage);