import React, { Component } from "react";
import "./style.css"
import "../../assets/app.css"

class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo="";
    this.texto="";
  }
  
  _handleMudancaTitulo(evento) {
    this.titulo = evento.target.value
  }

  _handleMudancaTexto(evento) {
    this.texto = evento.target.value
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <section>
        <form 
        className="form-cadastro" 
        onSubmit={this._criarNota.bind(this)}
        >
          <input 
          className="form-cadastro_input"
          type="text" 
          placeholder="Título"
          onChange={this._handleMudancaTitulo.bind(this)}
          />

          <textarea 
          className="form-cadastro_input" 
          rows={15}
          placeholder="Escreva sua nota"
          onChange={this._handleMudancaTexto.bind(this)}
          />

          <button className="form-cadastro_input form-cadastro_submit">Criar nota </button>
        </form>
      </section>
    );
  }
}

export default FormularioCadastro;