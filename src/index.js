import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    firstName="Franz"
    lastName="Carhuaricra"
    avatarUrl="https://www.gravatar.com/avatar/f68894dcfd0f933983491fa0833d05e7?d=identicon"
    jobTitle="Frontend Engineer"
    twitter="franz"
  />,
  container
);
