import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    nomePacote: "",
    epoca: "",
    preco: 0,
    periodoEmDias: 0
  }

  create = () => {
   console.log(this.state);
  }


  render () {
    
    return (
      <div className="Container">
      <div className="App">
        <h1>Cadastro de Pacotes</h1>
      
        <label className="Field">Pacote</label>
        <input type="text" className="Input-field" value={this.state.nomePacote} onChange={(e) => {this.setState({nomePacote: e.target.value})}} />
        <br/>
        <label className="Field">Época</label>
        <input type="text" className="Input-field" value={this.state.epoca} onChange={(e) => {this.setState({epoca: e.target.value})}} />
        <br/>
        <label className="Field">Preço</label>
        <input type="text" className="Input-field" value={this.state.preco} onChange={(e) => {this.setState({preco: e.target.value})}} />
        <br/>
        <label className="Field">Período</label>
        <input type="text" className="Input-field" value={this.state.periodo} onChange={(e) => {this.setState({periodo: e.target.value})}} />

        <br/>
        <button className="Button" onClick={this.create}>Salvar</button>

       
      </div>
      
  
      </div>
    );
  }

}




