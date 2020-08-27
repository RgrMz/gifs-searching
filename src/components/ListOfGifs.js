import React, {useState, useEffect} from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs'
export default function ListOfGifs({searchTerm = ''}) {

    const [gifs, setGifs] = useState([]);

    useEffect(function () {
      getGifs({searchTerm})
      .then(gifs => setGifs(gifs));
    }, [searchTerm]); //Minuto 1:02:15 para las dependencias de useEffect

    return(
        gifs.map(({id, title, url}) => 
            <Gif 
                id={id} 
                key={id}
                title={title} 
                url={url} 
            />
        )
    );
}