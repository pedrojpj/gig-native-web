'use strict';

import App from './common/components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';


// CSS
require('normalize.css');
require('./styles/main.css');

var content = document.getElementById('content');

ReactDOM.render((
  <App />
), content);
