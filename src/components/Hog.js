import React, {Component} from 'react'

export default class Hog extends Component{


    state = {
        clicked: false
    }



    onClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        const {name, weight, specialty, greased} = this.props
        const highestMedalAchieved = this.props["highest medal achieved"]
        const gloopify = () => {
            const lowerCaseName = name.toLowerCase()
            return lowerCaseName.split(" ").join("_")
        }

        const displayString = this.state.clicked ? "block" : "none"

        return(
            // weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water
            <div className="ui card" onClick={this.onClick}>
                <div>{name}</div>
                <img src={require(`../hog-imgs/${gloopify()}.jpg`)} alt="Augustus Gloop"/>
                <div style={{display: displayString}}>
                    <strong>Specialty: </strong>{specialty}<br/>
                    <strong>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: </strong>{weight}<br/>
                    <strong>Greased: </strong>{`${greased}`}<br/>
                    <strong>Rank: </strong>{highestMedalAchieved}<br/>
                </div>

            </div>
        )
    }

}


