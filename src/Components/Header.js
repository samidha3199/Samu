import { useState } from "react"
import { LOGO_URL } from "../utils/constants"

// *Header Component 

const Header = ()=>{

    const [buttonName, setbuttonName] = useState("Sign up")

    return(
        <>
            <nav>
                <div className="container nav__container">
                    <a className="nav__logo">
                        <img src={LOGO_URL} alt="Logo"/>
                    </a>
                    <ul className="nav__items">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                        <li>
                            <a><span><i class="uil uil-shopping-cart-alt"></i></span> Cart</a>
                        </li>
                    </ul>
                    <button className="btn" onClick={()=>{
                        buttonName === "Login" ? setbuttonName("Sign up") : setbuttonName("Login")
                    }}>{buttonName}</button>
                </div>
            </nav>
        </>
    )
}

export default Header