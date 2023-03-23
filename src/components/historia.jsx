import React from "react"
import pil from '../assets/img/pil.png'


export default function Historia () {
    return (
        <div className="flex position-relative">
            <div className="width-50% ">
            <img src={pil} alt="" />
            </div>
                
            <div className="position-absolute width-50% right-0 padding-xl card-text">
                <h1 className="text-center title">Nuestra historia</h1>
                <p className="text-center text">Dicen que todos los caminos conducen a Roma. Como los nuestros, que un día de enero hace algunos años, una selfie y un desayuno dieron como resultado atardeceres en la playa y el comienzo de un amor de verano.</p>
                <p className="text-center text">Luego vinieron viajes, muchas risas, una mudanza, momentos compartidos en familia y aventuras con amigos. Un amor de verano que se transformó en uno para toda la vida.</p>
            </div>
        </div>
    )
}