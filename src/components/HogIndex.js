import React from 'react'
import Hog from './Hog.js'

const HogIndex = (props) => {
    const uuidv4 = require('uuid/v4');
    const renderHogs = () => props.hogs.map(hog => <Hog {...hog} key={uuidv4()}/>)


    // console.hog(props.hogs)
    return (
        <div className="ui cards">
            {renderHogs()}
        </div>
    )
}


export default HogIndex
