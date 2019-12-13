import React from 'react';
import Hog from './Hog.js'

const HogIndex = (props) => {
    // console.hog(props)
    const uuid = require('uuid/v4');

    const renderHogs = () => {
    return props.hogs.map(hog => <Hog {...hog} key={uuid()}/>)
    }

    return (
    <div className="ui cards">
        {renderHogs()}
    </div>
    )
}

export default HogIndex