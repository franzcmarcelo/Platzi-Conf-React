import React from 'react';

import Navbar from './Navbar';

function Layout(props) {

  return (
    <React.Fragment>
      <Navbar />
      {/* El children representa todo el contenido
      que esta dento de <Layout> en App */}
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
