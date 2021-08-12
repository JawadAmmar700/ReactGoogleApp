//imports
import React, { useState } from 'react'
import SearchInput from './SearchInput'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import ClearIcon from '@material-ui/icons/Clear';
import AppsIcon from '@material-ui/icons/Apps';
import ImageIcon from '@material-ui/icons/Image';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { StateValue } from '../StateProvider'
import { api_key } from '../api_key'

//css
import './css/Content_Nav.css'

const Context_key = "6e3633abedcbe06e3";



//global variable
const subtext = [
    {
        logo: <SearchIcon />,
        name: "All",

    },
    {
        logo: <ImageIcon />,
        name: "Images",
    },
    {
        logo: <OndemandVideoIcon />,
        name: "Videos",
    },
    {
        logo: <AssignmentIcon />,
        name: "News",
    },
    {
        logo: <MenuBookIcon />,
        name: "Books",
    },
    {
        logo: <MoreVertIcon />,
        name: "More",
    }
]

const Content_Nav = () => {
    const [{ Api_data }, dispatch] = StateValue();
    const [newContent, setNewContent] = useState([]);
    const [input, setInput] = useState('');
    let id = 0;
    const handleSubmit = e => {
        e.preventDefault();

        fetch(`https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${Context_key}&q=${input}`)
            .then(response => response.json())
            .then(data => {
                setNewContent(data.items)
            })
        dispatch({
            type: "ADD_API",
            data: input
        })
        setInput('')
    }

    return (
        <div className="Nav">
            <div className="upper">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />

                <div className="Input_page">
                    <form onSubmit={handleSubmit}>
                        <input className="input_page" type="text" placeholder="Search Google or type Url"
                            onChange={e => setInput(e.target.value)}
                            value={input}
                        />
                    </form>
                    <ClearIcon className="clear_icon" />
                    <MicIcon className="mic-icon" />
                    <SearchIcon className="search_icon" />
                </div>
                <div className="upper_right">
                    <AppsIcon className="App_icon" />
                    <Button variant="contained" color="primary" href="#contained-buttons" >Sign In</Button>
                </div>
            </div>

            <div className="lower">
                {subtext.map(item => (
                    <div key={id++} className="sub">
                        <div className="logo">
                            {item.logo}
                        </div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Content_Nav
