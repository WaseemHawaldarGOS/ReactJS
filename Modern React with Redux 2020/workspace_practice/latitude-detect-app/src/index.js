import React from 'react';
import ReactDOM from 'react-dom';

class LatitudeFinder extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            lat : null,
            errMsg: ''
        }

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMsg: err.message})
        );
    }

    render(){
        if(this.state.lat && !this.state.errMsg){
            return <div> Latitude: {this.state.lat}</div>
        }
        else if(!this.state.lat && this.state.errMsg){
            return <div> Error: {this.state.errMsg}</div>
        }
        return <div>Loading...</div>
    }

}

ReactDOM.render(<LatitudeFinder/>, document.querySelector("#root"));