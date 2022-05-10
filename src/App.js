import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    nomeDestino: "",
    localidade: "",
    tipoDestino: "",
    pacote: "" 
  }

  create = () => {
   console.log(this.state);
  }


  render () {
    
    return (
      <div className="Container">
      <div className="App">
        <h1>Cadastro de Destinos</h1>
      
        <label className="Field">Destino</label>
        <input type="text" className="Input-field" value={this.state.nomeDestino} onChange={(e) => {this.setState({nomeDestino: e.target.value})}} />
        <br/>
        <label className="Field">Localidade</label>
        <input type="text" className="Input-field" value={this.state.localidade} onChange={(e) => {this.setState({localidade: e.target.value})}} />
        <br/>
        <label className="Field">Tipo do Destino</label>
        <input type="text" className="Input-field" value={this.state.tipoDestino} onChange={(e) => {this.setState({tipoDestino: e.target.value})}} />
        <br/>
        <label className="Field">Pacote</label>
        <input type="text" className="Input-field" value={this.state.pacote} onChange={(e) => {this.setState({pacote: e.target.value})}} />

        <br/>
        <button className="Button" onClick={this.create}>Salvar</button>

       
      </div>
      
  
      </div>
    );
  }

}




