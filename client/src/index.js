import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store'
import video from './components/video/Pexels.mp4'

ReactDOM.render(
  <Provider store={store}>
     <video autoPlay loop muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '0',
          objectFit: 'cover',
          zIndex: '-1'

        }}
        >
          <source src={video} type='video/mp4'/>
        </video>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
