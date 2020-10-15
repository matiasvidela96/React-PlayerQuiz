import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlayerQuiz from './PlayerQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle,sample} from 'underscore';

const players = [
  {
    name:'Roger Federer',
    imageUrl:'images/players/federer.jpg',
    imageSource: 'google',
    titles: ['Wimbledon 2012',
             'Australian Open 2017',
             'Us open 2008',
             'Roland Garros 2009'
            ]
    },
    {name:'Lionel Messi',
    imageUrl:'images/players/messi.jpg',
    imageSource: 'google',
    titles: ['Olympics golden medal 2008',
             'Club World Cup 2009',
             'Uefa Super Cup 2011',
             'Kings Cup 2017'
            ]
    },
    {name:'Rafael Nadal',
    imageUrl:'images/players/nadal.jpg',
    imageSource: 'google',
    titles: ['Wimbledon 2008',
           'Australian Open 2009',
           'Us open 2019',
           'Roland Garros 2006'
          ]
    },
    {name:'Lebron James',
    imageUrl:'images/players/james.jpg',
    imageSource: 'google',
    titles: ['Olympics golden medal 2012',
             'NBA champion 2012',
             'Bronce medal World Cup 2006',         
            ]
    },
    {name:'Kimi Raikonen',
    imageUrl:'images/players/raikonen.jpg',
    imageSource: 'google',
    titles: ['F1 Drivers title 2007'
            ]
    },
    {name:'Cristiano Ronaldo',
    imageUrl:'images/players/ronaldo.jpg',
    imageSource: 'google',
    titles: ['Uefa Champions League 2016',
             'Club World Cup 2017',
             'Nations League 2019',
             'Kings Cup 2011'
            ]
    },
];

function getTurnData(players){
  const allTitles = players.reduce(function(p,c,i){ //uno todos los títulos de lo jugadores
    return p.concat(c.titles);
  },[]);
  const fourRandomTitles = shuffle(allTitles).slice(0,4); //mezclo y obtengo 4 titulos
  const answer = sample(fourRandomTitles);//selecciono uno de los 4 titulos

  return {
    titles: fourRandomTitles,  //devuelvo los 4 titulos
    player: players.find((player)=> //devuelvo un jugador que tenga algún titulo = al seleccionado en aswer
            player.titles.some((title) => 
            title===answer))
  }
}

const state = {
  turnData: getTurnData(players),
  highlight: ''
};

function onAswerSelected(answer){
  const isCorrect = state.turnData.player.titles.some((title) => title===answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}
function render(){
  ReactDOM.render(
    <React.StrictMode>
      <PlayerQuiz {...state} onAswerSelected={onAswerSelected}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
