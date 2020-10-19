import React from 'react';
import propTypes from 'prop-types'
import './App.css';
import './bootstrap.min.css';
import { Link } from 'react-router-dom';

function Hero(){
  return(<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Player Quiz</h1>
      <p>Select the championship title of the player shown in the image</p>
    </div>
  </div>);
}

function Title({titlename,onClick}){
  return(<div className="answer" onClick={() => {onClick(titlename);}}>
    <h4>{titlename}</h4>
  </div>
  );
}

function Turn({player,titles,highlight,onAswerSelected}){
  function highlightToBgColor(highlight){
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  }
  return(<div className="row turn" >
    <div className="col-4 offset-1">
      <img src={player.imageUrl} className="playerimage" alt="Player"></img>
    </div>
    <div className="col-6" style={{backgroundColor: highlightToBgColor(highlight)}}>
      {titles.map((titlename) => <Title titlename={titlename} key={titlename} onClick={onAswerSelected}/>)}
    </div>
  </div>);
}
Turn.propTypes = {
  author: propTypes.shape({
    name: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    imageSource: propTypes.string.isRequired,
    titles: propTypes.arrayOf(propTypes.string).isRequired
  }),
  titles: propTypes.arrayOf(propTypes.string).isRequired,
  onAswerSelected: propTypes.func.isRequired,
  highlight: propTypes.string.isRequired
}

function Continue({show,onContinue}){
  return (
    <div className="row continue">
    { show 
      ? <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
        </div>
      : null }
    </div>
  );
}

function Footer(){
  return(<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">
        All images are from <a href="https://www.google.com/">Google</a> and are in the public domain
      </p>
    </div>
  </div>)
}

function PlayerQuiz({turnData,highlight,onAswerSelected,onContinue}) {  
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData} highlight={highlight} onAswerSelected={onAswerSelected} />
      <Continue show={highlight === 'correct'} onContinue={onContinue}/>
      <p><Link to="/add">Add a player</Link></p>
      <Footer/>
    </div>
  );
  
}
export default PlayerQuiz;
