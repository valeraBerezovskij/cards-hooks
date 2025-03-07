import React, { useState } from 'react'
import { Price } from './Price'

export function TitleBar(props) {
    let styleDiv = {
        backgroundColor: props.bColor,
        width: '390px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    }

    let styleTitle = {
        fontSize: '41px',
        textAlign: 'center',
        color: 'white',
        margin: 0,
    }

    return (
        <div style={styleDiv}>
            <h1 style={styleTitle}>{props.title}</h1>
            <Price price={props.price} />
        </div>
    )
}
