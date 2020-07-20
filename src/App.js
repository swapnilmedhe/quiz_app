import React from 'react';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import {BrowserRouter as Router , Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <span className="mdi mdi-face"> hey</span> */}
       <Route  path="/" exact  component={Home}/>
       <Route  path ="/play/instructions" exact component={QuizInstructions}/>
       <Route path="/play" exact component={Play}/>
    </Router>
  );
}

export default App;
