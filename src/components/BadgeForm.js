import React from 'react';

class BadgeForm extends React.Component {
  // Es importante inicializar el state, para que se pueda leer
  state = {
    // Si se requiere podemos inicial alguna prop, en este caso
    // al cargar el form, en el input firstName estara 'Franz'
    firstName: 'Franz'
  };

  // La informacion del state se esta guardando 2 veces
  // Cada input guarda su propio valor y al mismo tiempo
  // la está guardando en setState. Para solucionarlo
  // hay que modificar los inputs de un estado
  // de no controlados a controlados. Añadiendo un prop
  // adicional  a los input: value={this.state.myProp}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
