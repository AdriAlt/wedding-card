import React from "react"
import pil from '../assets/img/portada-mobile.png'

export default function Galeria () {
    return (
        <div className="flex flex-column flex-center">
            <p>album de fotos</p>
            <p>Momentos unicos</p>
            <div className="flex flex-center">
                <ul className="flex flex-wrap">
                    <li className="size-img">
                        <img src={pil} alt="" />
                    </li>
                    <li className="size-img">
                        <img src={pil} alt="" />
                    </li>
                    <li className="size-img">
                        <img src={pil} alt="" />
                    </li>
                    <li className="size-img">
                        <img src={pil} alt="" />
                    </li>
                    <li className="size-img">
                        <img src={pil} alt="" />
                    </li>
                    <li className="size-img">
                        <img src={pil} alt="" />
                    </li>
                    <li className="size-img">
                        <img src={pil} alt="" />
                    </li>
                    <li className="size-img">
                        <img src={pil} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}