import React from "react"
import baile from '../assets/img/baile.png'

export default function Regalos () {
    return (
        <div className="bg-black">
            <div className="flex flex-column flex-center padding-x-xl">
        <img src={baile} alt="" width="50px" />
        <p>Regalos</p>
        <p>Si deseás hacernos un regalo, enterate cómo podes ayudarnos.</p>
        <button>Hacer un regalo</button>
        </div>
        </div>
    )
}