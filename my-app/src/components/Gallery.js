import React from 'react';
import Photo from './Photo';

const Gallery = (props) {

    const results = props.data;
    let images = results.map(image =>
        <Photo url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />
    );

    return(
        <div className="photo-container">
            <h2>{props.title}</h2>
            <ul>
            {results.length === 0 ?
                <li className="not-found">
                    <h3>Results not found</h3>
                    <p>Sorry, we did not find any results to match your query.</p>
                </li>
                    : images}             
            </ul>
        </div>
    );
}

export default Gallery;