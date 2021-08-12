//imports
import React from 'react'
import SearchInput from './SearchInput'
import AddIcon from '@material-ui/icons/Add';
//css
import './css/middle.css'

const middlePage = () => {
    return (
        <div className="middle">
            {/* Google logo */}
            <p id="google">Google</p>

            {/* <SearchInput/> */}
            <SearchInput />
            {/* add shortcut */}
            <div className="add_shortcut">
                <div className="AddLogoWrapper">
                    <AddIcon />
                </div>
                <p id="addShortcut">Add shortcut</p>
            </div>

        </div>
    )
}

export default middlePage
