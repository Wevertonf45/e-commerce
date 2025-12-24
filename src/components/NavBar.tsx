import Lnk from "./ui/Lnk";
import { FaUser, FaCartPlus } from "react-icons/fa";


const navLinks = [
    { href: "/products", label: "Produtos" },
    { href: "/products/casacos", label: "Casacos" },
    { href: "/products/vestidos", label: "Vestidos" },
    { href: "/products/blazers", label: "Blazers" },
]

function NavBar() {
    return (
        <header className="flex justify-between bg-prim border-b border-gray-300 p-4 h-20 items-center px-45">
            <div>
                <Lnk className="font-serif text-4xl text-letter1" href="/">FashionStore</Lnk>
            </div>

            <nav className="flex gap-8">
                {navLinks.map((item, index) => (
                    <Lnk
                        key={index}
                        className="text-letter2 hover:text-black"
                        href={item.href}>
                        {item.label}
                    </Lnk>
                ))}
            </nav>

            <div className="flex gap-4">
                <FaCartPlus size={20} className=" w-10 h-10 p-2 rounded-full cursor-pointer transition-all duration-300  hover:bg-sec hover:scale-105" />
                <FaUser size={20} className=" w-10 h-10 p-2 rounded-full cursor-pointer transition-all duration-300  hover:bg-sec hover:scale-105" />
            </div>

        </header>
    )
}

export default NavBar;
