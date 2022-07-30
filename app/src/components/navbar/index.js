import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {

    return (
        <ul>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/novo-produto'>Adicionar produto</Link>
        </ul>
    )
}