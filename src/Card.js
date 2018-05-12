import React from 'react'

const Card = (props) => {
    return (
        <th className={'card'} style={{padding:5}}>
            <img src={props.avatar} style={{width:75}}/>
            <div style={{fontWeight:'bold'}}>{props.name}</div>
            <div>{props.location}</div>
        </th>
    )
}

export default Card
