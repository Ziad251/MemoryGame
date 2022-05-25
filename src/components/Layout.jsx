import Card from './Card.jsx'
import React from 'react'
import '../Layout.css'
function Layout(props) {
const {useState } = React;
  const [score, setScore] = useState(0);
  const initialCard = {
    title : ""
  }
  const [selectedCard, setSelectedCard] = useState(initialCard);
  
  function handleClick (e) {
    e.preventDefault(); 
    if(selectedCard.title === "") {
    setSelectedCard( 
   {    title:e.currentTarget.textContent,
   });
    }
    
    if(selectedCard.title != ""){
      updateScore(e.currentTarget.textContent);
    }
  }
  const updateScore = (card) => {
    if(card === selectedCard.title) {
      setScore(count => count+=1);
      setSelectedCard(initialCard);
    }
    setSelectedCard(initialCard);
  }
  const urls = props.urls;
  return (
    <div className="parent">
    <h2>
     Memory Game
    </h2>
      <div className = "scoreboard">
        <h4> Score: {score} </h4>
        <h4> Clicked: {selectedCard.title} </h4>
        
      </div>
      <h5>Get points by clicking on an image but don't click on any more than once!</h5>  
      <div className="container">
      {urls.map((url) => {
        return <Card title={url.title} imgUrl ={url.url} click={handleClick}/>;
      })}

        </div>
      </div>
    
    
  );
}

export default Layout;