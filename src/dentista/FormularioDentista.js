import React, { Component } from 'react';


export default class FormularioDentista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // codigo:'',
            nome: '',
            cro: '',
            email: '',
            telefone: ''
        }
        this.state = this.stateInicial
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    enviarDados = () => {
        this.props.enviarDados(this.state)
        this.setState(this.stateInicial)

    }

    render() {
        const { nome, cro, telefone, email } = this.setState
        return (
            <div className="card mt-5">
                <div className="card-header text-uppercase">
                    <h5>Cadastro dentistas</h5>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <form >
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" className="form-control" name="nome" id="nome" value={nome} onChange={this.changeHandler}></input>
                            <label htmlFor="cro">Cro:</label>
                            <input type="text" className="form-control" name="cro" id="cro" value={cro} onChange={this.changeHandler}></input>
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="text" className="form-control" name="telefone" id="telefone" value={telefone} onChange={this.changeHandler}></input>
                            <label htmlFor="email">E-mail:</label>
                            <input type="text" className="form-control" name="email" id="email" value={email} onChange={this.changeHandler} ></input>
                            <button type="button" className="btn btn-outline-success btn-block mt-3" onClick={this.enviarDados}>Salvar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

