import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid #96CCFF', height: '350px'}}>
            {props.children}
        </div>
    )
}

export default Scroll