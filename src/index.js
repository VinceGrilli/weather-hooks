import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrMsg(err.message)
    );
  }, []);

  let content;
  if (errMsg) {
    content = <div>Error: {errMsg}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner msg="Please click allow location" />;
  }
  return <div className="boarder red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
