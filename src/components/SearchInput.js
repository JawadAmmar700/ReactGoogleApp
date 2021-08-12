//imports
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { StateValue } from '../StateProvider'

//css
import './css/searchInput.css'

const SearchInput = () => {
    const [value, setValue] = useState('');
    const [{ api_data }, dispatch] = StateValue();
    const history = useHistory();


    const handelSubmit = e => {
        e.preventDefault();
        console.log(value)
        dispatch({
            type: "ADD_API",
            data: value
        })
        history.push('/search')
        setValue('')
    }


    return (
        <div className="Input">
            <div className="Input_Wrapper">
                <SearchIcon className="searchIcon" />
                <form onSubmit={handelSubmit}>
                    <input className="input" type="text" placeholder="Search Google or type Url"
                        onChange={e => setValue(e.target.value)}
                        value={value}
                    />
                </form>
                <MicIcon className="MicIcon" />
            </div>
        </div>
    )
}

export default SearchInput
