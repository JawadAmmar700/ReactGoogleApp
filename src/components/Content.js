//imports
import React, { useState, useEffect } from 'react'
import { StateValue } from '../StateProvider'
import Content_Nav from './Content_Nav'
import { api_key } from '../api_key'
import CheckIcon from '@material-ui/icons/Check'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// css
import './css/Content.css'

// global variables
const Context_key = '6e3633abedcbe06e3'

const Content = () => {
  const [{ Api_data }, dispatch] = StateValue()
  const [content, setContent] = useState([])

  useEffect(() => {
    if (Api_data) {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${Context_key}&q=${Api_data}`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setContent(data.items)
        })
    }
  }, [Api_data])
  return (
    <div className="Content_Page">
      {/* content nav */}
      <div className="content_nav">
        <Content_Nav />
      </div>

      {/* searchs */}
      {content.map(item => (
        <div key={item.cacheId} className="contents">
          <div className="upperContent">
            <div className="link">
              <CheckIcon style={{ color: 'blue', width: '20px' }} />
              <p>{item?.displayLink}</p>
              <ExpandMoreIcon style={{ color: 'blue', width: '20px' }} />
            </div>
            <div className="title">
              <a href={item?.link} target="_blank">
                {item?.title}
              </a>
            </div>
          </div>
          <div className="parg">{item.snippet?.slice(0, 150)}...</div>
        </div>
      ))}
    </div>
  )
}

export default Content
