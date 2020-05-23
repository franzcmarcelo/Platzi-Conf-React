import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';

const container = document.getElementById('app');

// Badge (sin los <>, representa un componente)
// Pero a ReactDOM.render hay que darle un elemento: <Badge />

ReactDOM.render(<Badge />, container);
