import React from 'react'
function Card(props) {
  const imgUrl = props.imgUrl;
  const title = props.title;
  return (
  <div className="card" onClick={props.click}>
      <img src={imgUrl}></img>
      <h1>{title}</h1>
      </div>
  )
}

export default Card;
