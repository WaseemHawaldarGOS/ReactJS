import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
     {/*By using below function component we can't fetch the latitude from window navigator callback.
     And the only solution to this is to convert function based component to class based.
     const App = () => {

         window.navigator.geolocation.getCurrentPosition(
               position => console.log(position),
               err => console.log(err)
             );
         return <div> Hi there!. Latitude is: </div>;
     };*/}



    class App extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                lat: null,
                errorMessage: ''
            }

            window.navigator.geolocation.getCurrentPosition(
                           position => {
                                this.setState({lat: position.coords.latitude})
                           },
                           err => {
                                this.setState({errorMessage: err.message})
                           }
            );

        }

        render(){
            if(this.state.lat && !this.state.errorMessage){
                return <div> Latitude: {this.state.lat} </div>
            }

            if(!this.state.lat && this.state.errorMessage){
                return <div> Error message: {this.state.errorMessage} </div>
            }
            return <div> Loading!</div>
        }
    }

ReactDOM.render(<App />, document.querySelector('#root'));