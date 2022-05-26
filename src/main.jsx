import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Layout from './components/Layout.jsx'


const urlArray = [
  {
    title: "one",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/1.png"
  },
    {
    title: "one",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/1.png",
  },
    {
    title: "two",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/2.png",
  },
    {
    title: "two",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/2.png",
  },
    {
    title: "three",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/3.png",
  },
    {
    title: "three",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/3.png",
  },
    {
    title: "four",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/4.png",
  },
    {
    title: "four",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/4.png",
  },
    {
    title: "six",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/6.png",
  },
    {
    title: "six",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/6.png",
  },
    {
    title: "seven",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/7.png",
  },
    {
    title: "seven",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/7.png",
  },
    {
    title: "eight",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/8.png",
  },
    {
    title: "eight",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/8.png",
  },
    {
    title: "nine",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/9.png",
  },
    {
    title: "nine",
  url: "https://ziad251-memorygame.s3.eu-central-1.amazonaws.com/9.png",
  }
];
let shuffled = urlArray
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

ReactDOM.render(
  <React.StrictMode>
    <Layout urls={shuffled}/>
  </React.StrictMode>,
  document.getElementById('root')
)
