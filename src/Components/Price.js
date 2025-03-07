import React from 'react'

export function Price(props) {
    let styleDiv = {
        width: "250px",
        height: "60px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        color: "white",
        position: "absolute",
        bottom: "-30px",
        left: "50%",
        transform: "translateX(-50%)",
    }

    let stylePrice={
        fontSize:"27px",
        
    }
    return (
        <div style={styleDiv}>
            <h3 style={stylePrice}>{props.price}</h3>
        </div>
    )
}