import React from 'react';
import { Component } from 'react';

export default class Cep extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="container">
        <h2>Exemplo de consulta ao CEP</h2>
        <form action="">
          <div className="form-group">
            <input type="number" className="form-control"/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Consulta</button>
          </div>
        </form>
      </div>
    )
  }
}