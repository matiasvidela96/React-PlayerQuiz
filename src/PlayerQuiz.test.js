import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import PlayerQuiz from './PlayerQuiz';
import Enzyme, {mount, shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const state = {
  turnData: {
    titles: ['Wimbledon 2009', 'IT', 'David Copperfield', 'Romeo and Juliet'],
    player: {
      name: 'Roger Federer',
      imageUrl: 'images/players/federer.jpg',
      imageSource: 'Googlee',
      titles: ['Us open 2008', 'Wimbledon 2009']
    },
  },
  highlight: 'none'
}

describe("Player Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PlayerQuiz  {...state} onAnswerSelected={()=>{}}/>,div);
  });

  describe("When no answer has been selected", ()=>{
    let wrapper;
    beforeAll(()=> {
        wrapper = mount(<PlayerQuiz {...state} onAnswerSelected={()=> {}}/>);
    });

    it("should have no background color", () => {
        expect(wrapper.find("div.col-6").props().style.backgroundColor).toBe("");
    });
});

describe('When the wrong answer has been selected', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <PlayerQuiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={()=>{}} />);
    });

    it('should have a red background color', () => {
        expect(wrapper.find('div.col-6').props().style.backgroundColor).toBe('red');
    });        
  });

  describe('When the correct answer has been selected', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <PlayerQuiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={()=>{}} />);
    });

    it('should have a green background color', () => {
        expect(wrapper.find('div.col-6').props().style.backgroundColor).toBe('green');
    });        
  });

  // describe("When the first answer is selected", ()=>{
  //     let wrapper;
  //     const handleAnswerSelected = jest.fn();
      
  //     beforeAll(()=>{
  //       wrapper = mount(
  //           <PlayerQuiz {...state} onAnswerSelected={handleAnswerSelected} />);
  //       wrapper.find('.answer').first().simulate('click');    
  //     });

  //     it("onAnswerSelected should be called", ()=>{
  //         expect(handleAnswerSelected).toHaveBeenCalled();
  //     });

  //     it("should receive Wimbledon 2009", ()=>{
  //         expect(handleAnswerSelected).toHaveBeenCalledWith("Wimbledon 2009");
  //     });
  // });
});

