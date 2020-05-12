import React from 'react';
import SelectDate from './components/SelectDate';
import Results from './components/Results';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedDate : 0};
  }

  render() {
    return (
      <div className="fruity-app">
        <SelectDate />
        <Results />
      </div>
    );
  }
}

export default App;
