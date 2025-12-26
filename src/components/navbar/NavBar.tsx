import Lnk from "../ui/lnk/Lnk";
import { FaUser, FaCartPlus } from "react-icons/fa";
import "./NavBar.css";

const navLinks = [
    { href: "/products", label: "Produtos" },
    { href: "/products/casacos", label: "Casacos" },
    { href: "/products/vestidos", label: "Vestidos" },
    { href: "/products/blazers", label: "Blazers" },
];

function NavBar() {
    return (
        <header>
            <div className="logo-container">
                <Lnk className="logo-link" href="/">FashionStore</Lnk>
            </div>

            <nav className="nav-container">
                {navLinks.map((item, index) => (
                    <Lnk
                        key={index}
                        className="nav-link"
                        href={item.href}>
                        {item.label}
                    </Lnk>
                ))}
            </nav>

            <div className="navbar-icons">
                <FaCartPlus size={20} className="icon" />
                <FaUser size={20} className="icon" />
            </div>
        </header>
    );
}

export default NavBar;
