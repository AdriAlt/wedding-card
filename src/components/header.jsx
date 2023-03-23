import React from "react"

export default function Header() {
    return (
        <div className="position-fixed top-0 width-100vw padding-md bg-white z-index-2">
            <div className="grid width-100%">
            <div className="col-4">
                <p className="header-logo">Negra y patron</p>
            </div>
            <div className="col-8 text-right">
                <a className="margin-x-sm text-decoration-none text" href="https://www.google.com.ar">save the date</a>
                <a className="margin-x-sm text-decoration-none text" href="https://www.google.com.ar">informacion</a>
                <a className="margin-x-sm text-decoration-none text" href="https://www.google.com.ar">regalos</a>
                <a className="margin-x-sm text-decoration-none text" href="https://www.google.com.ar">confirmar asistencia</a>
            </div>
            </div>
        </div>
    )
}