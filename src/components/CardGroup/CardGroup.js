import React from 'react';

const CardGroup = props => {
    return (
        // div to be placed within the Wrapper
            <div className="img-container"
            // when clicked, if matches break else add to score
            // onClick={() => }
            >
                {/* place in prop of map ofdifferent images of kimcrying */}
                <img className= "img-click" alt={props.id} src={props.image} id={props.id}
                onClick={() => props.shuffleImages(props.id)}/>
        </div>
    )
}

export default CardGroup;