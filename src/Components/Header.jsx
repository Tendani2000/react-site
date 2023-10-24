import React from "react"


export default function Header() {
    return (
        <header>
            <nav>
                <img src="./logo512.png" alt="react logo" width="60px" />
              <ul className="nav-bar">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
        </header>
    )
}
