import React from "react";
import iglesia from '../assets/img/iglesia.png'
import baile from '../assets/img/baile.png'

export default function Lugar() {
    return (
        <div className="flex flex-center padding-x-xl ">
            <div className="flex flex-column flex-center padding-x-xl">
                <img src={iglesia} alt="" width="50px" />
                <p className="title text-lg">Ceremonia</p>
                <p className="text">Parroquia Nuestra señora del Rosario</p>
                <p className="text">Bonpland 1987, Buenos Aires</p>
                <p className="text">9 de octubre, 12:00hs</p>
                <button>como llegar</button>
            </div>
            <hr className="border-1"/>
            <div className="flex flex-column flex-center padding-x-xl">
            <img src={baile} alt="" width="50px" />
            <p className="title text-lg">Festejo</p>
            <p className="text">El castillo eventos</p>
            <p className="text">Av. Pres. Figueroa 5575, Buenos Aires</p>
            <p className="text">9 de octubre, 13:00hs</p>
            <button>Como llegar</button>
            </div>
        </div>
    )
}