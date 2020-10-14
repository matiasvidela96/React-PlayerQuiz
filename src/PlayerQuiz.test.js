import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import PlayerQuiz from './PlayerQuiz';

describe("Player Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PlayerQuiz />,div);
  });
});
