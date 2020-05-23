import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            {/* A Badge y BadgeFrom le asignamos columnas de igual proporcio
            Dentro de la misma fila, grancias a Bootstrap */}
            <div className="col-6">
              <Badge
                firstName="Franz"
                lastName="Carhuaricra"
                twitter="franz"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar/f68894dcfd0f933983491fa0833d05e7?d=identicon"
              />
            </div>

            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
