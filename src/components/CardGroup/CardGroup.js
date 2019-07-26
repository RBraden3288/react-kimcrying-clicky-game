import React from 'react';

function CardGroup(props) {
    return (
        // div to be placed within the Wrapper
        <div className="card-group">
            <div className="img-card"
            // when clicked, if matches break else add to score
            // onClick={() => }
            >
                {/* place in prop of map ofdifferent images of kimcrying */}
                <img alt={props.id} src={props.image} />
            </div>
        </div>
    )
}

export default CardGroup;