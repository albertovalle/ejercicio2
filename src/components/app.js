import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showPhones } from '../actions'
//import { Table } from 'react-bootstrap'

class App extends Component {
  
  componentWillMount() {
    this.props.showPhones()
  }

  renderPhonesList() {
    return this.props.phones.map((phone) => {
      return (
        <li key={phone.id}>{phone.name}, Descripción: {phone.description}, Color: {phone.colour}, Precio: {phone.price}</li>
      )
    })
  }
  
  render() {
    return (
      <div>
        <h2>Listado de Móviles</h2>
          <ul>
            { this.renderPhonesList() }
          </ul>    
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phones: state.phone.list
  }
}

export default connect(mapStateToProps, { showPhones })(App)