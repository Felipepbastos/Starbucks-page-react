import {Link} from "react-router-dom"
import { HeaderStyle} from "./style"

export default function Header() {
    return (
        <HeaderStyle>
            <img src="\Images\logo.png" alt="logomarca" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">Novidades</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}