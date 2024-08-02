import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body"


// *App Layout Main Component

const AppLayout = ()=>{
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)