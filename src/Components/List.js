import React, { useState } from 'react'

export function List(props) {
    const styleUl = {
        listStyle: "none",
        padding: 0,
        margin: 0,
        fontSize: "21px"
    }

    const liStyle = {
        display: "flex",
        fontSize: "21px",
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        gap: "10px",
        whiteSpace: "nowrap",
        marginBottom: "30px",
    }

    const liList = props.list.map(item => (
        <li style={liStyle}>
            <span style={{paddingRight: "30px"}}>{item.sticker}</span>
            <span>{item.text}</span>
        </li>
    ))

    return (
        <div>
            <ul style={styleUl}>{liList}</ul>
        </div>
    )
}