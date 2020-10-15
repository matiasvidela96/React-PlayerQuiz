import React from 'react';
import './App.css';
import './bootstrap.min.css';

function Hero(){
  return(<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Player Quiz</h1>
      <p>Select the championship title of the player shown in the image</p>
    </div>
  </div>);
}

function Title({titlename}){
  return(<div className="answer">
    <h4>{titlename}</h4>
  </div>
  );
}

function Turn({player,titles}){
  return(<div className="row turn" style={{backgroundColor:"white"}}>
    <div className="col-4 offset-1">
      <img src={player.imageUrl} className="playerimage" alt="Player"></img>
    </div>
    <div className="col-6">
      {titles.map((titlename) => <Title titlename={titlename} key={titlename}/>)}
    </div>
  </div>);
}

function Continue(){
  return (<div></div>);
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

function PlayerQuiz({turnData}) {  
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData}/>
      <Continue/>
      <Footer/>
    </div>
  );
  
}
export default PlayerQuiz;
