import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  // Representado el input del Search
  const [query, setQuery] = React.useState("");

  // De aqui obtendremos todos badges que coincidan con la busqueda
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  // FIXME:
  // Hook useMemo: Permite optimizar la busqueda (como una especie de cache)
  // Recibe dos argumentos:
  // 1. la funcion con la logica (trabajando con badges y query)
  // 2. una lista con los argumentos que siempre que sean iguales devolvera
  // la respuesta ya guardada, sino, calcula la respuesta por primera vez
  React.useMemo(() => {
    // Devolvemos un array con todos los badges que cumplan el filtro
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  // Retornamos:
  // query: aqui tendremos el valor del input
  // setQuery: iremos modificando el valor de query, mediante onChange
  // filteredBadges: los badges que coincidieron con la busqueda
  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  // Si ningun badge conincide con la busqueda
  if (filteredBadges.length === 0) {
    return (
      // Mantenemos el Search
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        {/* Opcion para regresar */}
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          // Al llenar el input, mediante onChange
          // actualizamos el estado de query
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {/* Mapeamos los badge que coinciden con la
        busqueda y los renderizamos */}
        {/* Como inicialmente el valor de query es "" esta
        include en cualquier, entonces se renderizan todos*/}
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
