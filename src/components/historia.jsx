import React from "react"
import pil from '../assets/img/pil.png'


export default function Historia () {
    return (
        <div className="flex flex-center padding-x-xl">
            <div>
                <img src={pil} alt="" />
            </div>
            <div className="padding-right-xxxxl">
                <h1 className="text-center">Nuestra historia</h1>
                <p className="text-center">Dicen que todos los caminos conducen a Roma. Como los nuestros, que un día de enero hace algunos años, una selfie y un desayuno dieron como resultado atardeceres en la playa y el comienzo de un amor de verano.</p>
                <p className="text-center">Luego vinieron viajes, muchas risas, una mudanza, momentos compartidos en familia y aventuras con amigos. Un amor de verano que se transformó en uno para toda la vida.</p>
            </div>
        </div>
    )
}