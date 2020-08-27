import React from 'react'
import './Gif.css'

export default function Gif({title, id, url}) {

    return (
        <div className="gif-container">
            <h4 className="title">{title}</h4>        
            <img alt={title} src={url} className="img-gif"></img>
        </div>
    )

}