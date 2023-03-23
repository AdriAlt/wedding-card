import React from "react"
import baile from '../assets/img/baile.png'

export default function Asistencia () {
    return (
        <div>
            <div className="flex flex-column flex-center padding-x-xl">
        <img src={baile} alt="" width="50px" />
        <p>R S V P</p>
        <p>Confirmacion de asistencia</p>
        <p>Esperamos que puedas acompañarnos, por favor confirmanos.</p>
        <button>confirmar asistencia</button>
        </div>
        </div>
    )
}