import React from "react"
import iglesia from '../assets/img/iglesia.png'
import baile from '../assets/img/baile.png'

export default function Redes () {
    return (
        <div className="flex flex-center padding-x-xl ">
        <div className="flex flex-column flex-center padding-x-xl">
            <img src={iglesia} alt="" width="50px" />
            <p>Nuestra musica</p>
            <p>Escuchá las canciones que seleccionamos para nuestra boda</p>
            <button>escuchas en spotify</button>
        </div>
        <hr className="border-1"/>
        <div className="flex flex-column flex-center padding-x-xl">
        <img src={baile} alt="" width="50px" />
        <p>#Negra&Patron</p>
        <p>Sumate a nuestra boda usando este Hashtag para compartirnos</p>
        <p>fotos y videos</p>
        <button>Ver en instagram</button>
        </div>
    </div>
    )
}