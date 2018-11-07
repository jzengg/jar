import React from 'react';
import ReactDOM from 'react-dom';
// import 'normalize.css'
import 'reset-css'
import './index.css'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import moment from 'moment'
import vhCheck from 'vh-check'

import registerServiceWorker from './registerServiceWorker';

vhCheck()

moment.locale('en', {
  week: {
    dow: 1
  }
})

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker();
