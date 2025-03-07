import React, { useEffect, useState } from 'react'
import { TitleBar } from './Title'
import { List } from './List'
import { Bottom } from './Bottom'
import './Card.css';

export function Card(props) {
    const [info, setInfo] = useState({
        title: 'Default',
        price: '0.0',
    })

    useEffect(() => {
        setInfo({
            title: props.data.title,
            price: props.data.price,
        })
    }, [1])

    return (
        <div className="card">
            <TitleBar
                title={info.title}
                bColor={props.data.bColor}
                price={info.price}
            />
            <div className="list">
                <List list={props.data.list} />
            </div>
            <div className="bottom">
                <Bottom bColor={props.data.bColor} />
            </div>
        </div>
    )
}
