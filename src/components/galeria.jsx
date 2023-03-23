import React from "react"
import pil from '../assets/img/portada-mobile.png'

export default function Galeria () {
    return (
        <div className="flex flex-column flex-center padding-x-xl">
            <p>album de fotos</p>
            <p>Momentos unicos</p>
            <div>
                <ul className="flex flex-wrap gap-md">
                    <li>
                        <img src={pil} alt=""  width="400px" height="516px"/>
                    </li>
                    <li>
                        <img src={pil} alt=""  width="400px" height="516px"/>
                    </li>
                    <li>
                        <img src={pil} alt=""  width="400px" height="516px"/>
                    </li>
                    <li>
                        <img src={pil} alt=""  width="400px" height="516px"/>
                    </li>
                    <li>
                        <img src={pil} alt=""  width="400px" height="516px"/>
                    </li>
                    <li>
                        <img src={pil} alt=""  width="400px" height="516px"/>
                    </li>
                    <li>
                        <img src={pil} alt=""  width="400px" height="516px"/>
                    </li>
                    <li>
                        <img src={pil} alt=""  width="400px" height="516px"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}