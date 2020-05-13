import React from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import Results from './components/Results';
import './App.css';
import letter from './img/letter.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      items: [],
      item: {}
    };
  }

  handleChange = date => this.setState({ selectedDate: date });
  checkSelected = () => this.state.selectedDate ? 'Total fruit sales for the date' : "Select date to get the sales";

  isShown = date => {
    const date1 = `${date.getDate() > 9 ? date.getDate() :
      `0` + date.getDate()}/${(date.getMonth() + 1) > 9 ? (date.getMonth() + 1) :
        `0` + (date.getMonth() + 1)}/${date.getFullYear()}`;
    const arr = this.state.items;

    for (let i = 0; i < arr.length; i++) {
      if (date1 === arr[i].date) {
        this.setState(prevState => {
          if (prevState.selectedDate !== this.state.selectedDate) return { item: arr[i] }
        });
        return true;
      }
    }
  };

  componentDidUpdate() {
    let newOne = new Date(this.state.selectedDate);
    newOne = (`${newOne.getDate() > 9 ? newOne.getDate() :
      "0" + newOne.getDate()}/${(newOne.getMonth() + 1) > 9 ? (newOne.getMonth() + 1) :
        "0" + (newOne.getMonth() + 1)}/${newOne.getFullYear()}`)

    for (let i = 0; i < this.state.items.length; i++) {
      if (newOne === this.state.items[i].date) {
        this.setState((prevState) => {
          if (prevState.item !== this.state.items[i])
            return { item: this.state.items[i] };
        });
      }
    }
  }

  componentDidMount() {
    axios.get('items.json')
      .then(res => res.data)
      .then(data => this.setState({ items: data }))
  }

  render() {
    return (
      <div className="fruity-app">
        <h1 className="app-title">FRUITY <small>v0.01</small></h1>
        <header>
          <div className="select-query">{this.checkSelected()}</div>
          <div className="date">
            <DatePicker
              placeholderText="Click to select a date"
              className="date-picker"
              maxDate={new Date()}
              selected={this.state.selectedDate}
              onChange={this.handleChange}
              filterDate={this.isShown}
            />
          </div>
        </header>
        <Results selectedDate={this.state.selectedDate} item={this.state.item} />
        <footer>
          <span>&#169; 2020.</span>
          <a href="mailto:fivestring.dev@gmail.com"><img src={letter} alt="mail" /></a>
        </footer>
      </div>
    );
  }
}

export default App;
