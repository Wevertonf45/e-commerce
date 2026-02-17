import Link from "next/link";
import styles from "./NavBar.module.css";
import { links } from "@/consts/navlinks";
import { playFair } from "@/styles/fonts";
import { Search, User, ShoppingBag } from "lucide-react";




function NavBar() {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/" className={`${playFair.className} ${styles.title}`}>FashionStore</Link>
            </div>

            <nav className={styles.menu} aria-label="Menu Principal">
                {links.map((item, index) => (
                    <Link key={index} href={item.href}>{item.name}</Link>
                ))}
            </nav>

            <div className={styles.icon_bar}>
                <Search size={20} />
                <User size={20} />
                <ShoppingBag size={20} />
            </div>
        </header>
    )
}

export default NavBar;