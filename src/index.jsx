// import * as $ from 'jquery' 
import Post from './post.js'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './babel.js'
import './styles/styles.css'
import WebpackLogo from './assets/webpack-logo.png'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post("Webpack post title", WebpackLogo)
// $('pre').addClass('code').html(post.toString())

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Элемент #root не найден в DOM!');
}

// console.log('JSON:', json)
// console.log('XML:',xml)
// console.log('CSV:',csv)