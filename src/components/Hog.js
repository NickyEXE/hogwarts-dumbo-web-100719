import React, {Component} from 'react'

class Hog extends Component {

    state = {
        clicked: false
    }

    onClick = () => {
        this.setState(prevState => ({clicked: !prevState.clicked}))
    }


    render(){
        const {name, greased, specialty, weight} = this.props
        const rank = this.props["highest medal achieved"]
        const img = require("../hog-imgs/"+name.toLowerCase().split(" ").join("_") +".jpg")
        const display = this.state.clicked ? "block" : "none"
        return (
            <div className="card" onClick={this.onClick}>
                <h1 className="header">{name}</h1>
                <div className="ui image">
                    <img src={img} alt={name}/>
                </div>
                <div style={{display: display}}>
                    <div className="description"><strong>Specialty: </strong>{specialty}</div>
                    <div className="description"><strong>Am I a greasy boi? </strong>{greased ? "Heck yeah" : "🤕"}</div>
                    <div className="description"><strong>Highest Medal Achieved: </strong>{rank}</div>
                    <div className="description"><strong>Weight: </strong>{weight} tons</div>
                </div>
            </div>
            )
        }

}

export default Hog