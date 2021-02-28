import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Footer, NavBar } from './components';
import GlobalStyle from './GlobalStyles';
import Converter from './pages/Converter';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/converter-page' exact component={Converter} />
        <Route path='/quiz-page' exact component={Quiz} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
