import React, { Component } from 'react';

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th>CÓDIGO</th>
				<th>NOME</th>
				<th>TELEFONE</th>
				<th colSpan="2">AÇÕES</th>
			</tr>
		</thead>
	);
}

const TableBody = (props) => {

	const dentistas = props.dentistas.map((dentista) => {
		return (
			<tr key={dentista.codigo}>
				<td>{dentista.codigo}</td>
				<td>{dentista.nome}</td>
				<td>{dentista.telefone}</td>
				<td><button className="btn btn-warning" >Editar</button></td>
				<td><button 
				className=" btn btn-danger" 
				onClick={()=>{
					if(window.confirm('Confirma a exclusão')){
						props.excluirDentista(dentista.codigo)
					}
					}}>
						Excluir</button></td>
			</tr>
		);
	});

	return (
		<tbody>
			{dentistas}
		</tbody>
	);

}

export default class TabelaDentista extends Component {
	render() {

		const { dentistas ,excluirDentista} = this.props;

		return (
			<div className="card">
				<div className="card-header text-uppercase">
				<h5>Lista de Dentistas</h5>
				</div>
				<div className="card-body">
				<table className="table table-hover">
					<TableHead />
					<TableBody dentistas={dentistas} excluirDentista={excluirDentista} />
				</table>
				</div>
			</div>
		);
	}
}

