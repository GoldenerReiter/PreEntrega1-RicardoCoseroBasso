import React from "react";
import "./navbar.css"
import Cartwidget from "../cartwidget/cartwidget";

export default function Navbar() {
    return(
        <>
            <nav>
                <ul>
                    <li className="title">
                        <a href="#">Xmart</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <Cartwidget/>
                    </li>
                </ul>
            </nav>
        </>
    )
}