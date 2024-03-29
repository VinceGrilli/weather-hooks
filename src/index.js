import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  const [lat, errMsg] = useLocation();

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
