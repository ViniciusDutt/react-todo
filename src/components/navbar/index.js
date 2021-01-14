import React from 'react'

function Navbar ({counting}) {
    return (
        <div style={{textAlign:"center"}}>
            <h3 style={{color: "#808080", fontWeight: 200}}>You have <b>{counting}</b> to do's</h3>
        </div>
    )
}

export default Navbar