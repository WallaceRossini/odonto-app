import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabela from './dentista/TabelaDentista';
import axios from 'axios';
import Navbar from './components/Navbar'
import FormularioDentista from './dentista/FormularioDentista';

class App extends Component {

  state = {
    dentistas: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8080/odonto/dentistas')
      .then(res => {
        const dentistas = res.data;
        // console.log(dentistas);
        this.setState({ dentistas })
      })
  }

  enviarDados = dentista => {
    console.log(dentista);
    axios.post('http://localhost:8080/odonto/dentistas', dentista)
      .then(res => {
        console.log(res.data);
        console.log("Dentista cadastrado com sucesso")
        this.setState({ dentistas: [... this.state.dentistas, res.data] })
      })
      .catch(error => {
        console.log(error)
      })
  }

  excluirDentista = (codigo)=>{

    const dentistasAtual = this.state.dentistas

    axios.delete('http://localhost:8080/odonto/dentistas/' + codigo)
    .then((res)=>{
      if(res.status === 204){
        this.setState({
          dentistas: dentistasAtual.filter((dentista)=>{
            return dentistasAtual.codigo !== codigo
          })
        })
      }
    })
    .catch(error =>{
      console.log(error)
    })
  }

  consultarDentista = (codigo) =>{
    const dentista = this.state.dentistas.filter((dentista)=>{
      return dentista.codigo === codigo
    })

    console.log(dentista)
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
        <div className="row">
          <div className="col-md-4">
          <FormularioDentista enviarDados={this.enviarDados} />
          </div>
          <div className="col">
          <Tabela dentistas={this.state.dentistas} excluirDentista={this.excluirDentista} consultarDentista={this.consultarDentista} />
          </div>
        </div>
        </div>
      </Fragment>
    );
  }

}


export default App;
