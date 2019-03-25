import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Dev'
      },
      {
        title: 'Ecommerce',
        category: 'Web Development'
      }
    ]})
  }
  render() {
    return (
      <div className="App">
          <h1>My App</h1>
          <Projects projects={this.state.projects}/>
          </div>
    );
  }
}

export default App;
