import React from "react"

import ReactDOM from "react-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import MainContent from "./Components/MainContent"

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))