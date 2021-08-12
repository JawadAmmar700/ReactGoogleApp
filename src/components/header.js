//imports
import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
//css
import './css/header.css';

const header = () => {
    return (
        <div className="header">
            <p>Gmail</p>
            <p>Images</p>
            <div className="logo_Wrapper">
                <AppsIcon className="logo" />
            </div>
        </div>
    )
}

export default header
