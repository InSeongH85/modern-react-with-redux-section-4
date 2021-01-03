import React from 'react';
import ReactDOM from 'react-dom';
// https://developer.mozilla.org/ko/docs/WebAPI/Using_geolocation

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>  console.log(position),
      (error) => console.error(error)
    );
    
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />,  document.querySelector('#root'))