import React from 'react'
import ReactDOM from 'react-dom';
import { PizzaTrackApp } from './PizzaTrackApp';

import './styles.css';
console.log(process.env);
ReactDOM.render(
    <PizzaTrackApp/>
,document.getElementById('root')
);