import React, { useState } from 'react'

export function Bottom(props) {
    const buttonStyle={
        backgroundColor: props.bColor,
        width: "390px",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        border: "0px",
    }

    let styleTitle = {
        fontSize: "32px",
        textAlign: "center",
        color: "white",
        margin: 0,
        fontFamily: 'Roboto sans-serif'
    }

    return(
        <button style={buttonStyle}>
            <p style={styleTitle}>SELECT PACKAGE</p>
        </button >
    )
}