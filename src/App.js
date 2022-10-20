
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItem from './components/NewsItem';


export default class App extends Component {
  s = "sukh";
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}