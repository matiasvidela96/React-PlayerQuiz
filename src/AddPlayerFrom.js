import React from 'react';
import "./AddPlayerForm.css";

class PlayerForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      titles: [],
      playerTemp: ''
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddPlayer(this.state);
}
  onFieldChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
}
  handleAddPlayer(event) {
    this.setState({
        titles: this.state.titles.concat([this.state.playerTemp]), //Concateno el array de titulos que hay con un elemento nuevo que es playerTemp y luego limpio el contenido de playerTemp
        playerTemp: ''
  });
}

  render(){
    return <form onSubmit={this.handleSubmit}>
    <div className="AddPlayerFrom__input">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}/>
    </div>
    <div className="AddPlayerFrom__input">
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}/>
    </div>
    <div className="AddPlayerFrom__input">
        <label htmlFor="playerTemp">Titles</label>
        {this.state.titles.map((title)=><p key={title}> {title}</p>)}        
        <input type="text" name="playerTemp" value={this.state.playerTemp} onChange={this.onFieldChange} />
        <input type="button" value="+" onClick={this.handleAddPlayer} />
    </div>
    <input type="submit" value="Add"/>
</form>;    
  }
}

function AddPlayerForm({match,onAddPlayer}){
    return<div className="AddPlayerForm">
      <h1>Add Player</h1>   
      <PlayerForm onAddPlayer={onAddPlayer}/>  
    </div>
  }

  export default AddPlayerForm;