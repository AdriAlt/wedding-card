import React from "react";
import iglesia from '../assets/img/iglesia.png'
import baile from '../assets/img/baile.png'

export default function Lugar() {
    return (
        <div className="flex flex-center padding-x-xl ">
            <div className="flex flex-column flex-center padding-x-xl">
                <img src={iglesia} alt="" width="50px" />
                <p>Ceremonia</p>
                <p>Parroquia Nuestra señora del Rosario</p>
                <p>Bonpland 1987, Buenos Aires</p>
                <p>9 de octubre, 12:00hs</p>
                <button>como llegar</button>
            </div>
            <hr className="border-1"/>
            <div className="flex flex-column flex-center padding-x-xl">
            <img src={baile} alt="" width="50px" />
            <p>Festejo</p>
            <p>El castillo eventos</p>
            <p>Av. Pres. Figueroa 5575, Buenos Aires</p>
            <p>9 de octubre, 13:00hs</p>
            <button>Como llegar</button>
            </div>
        </div>
    )
}