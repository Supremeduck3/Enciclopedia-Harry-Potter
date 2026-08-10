import react from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Header.module.css"
export default function Header() {
    return (
        <header className={style.header}>
            <Image
                src={"/icons/icon-harray.png"}
                height={100}
                width={200}
                className={style.imagem}
                alt="Logo do ministerio da magia"
            />
            <div className={style.navegacao}>
                <nav className={style.nav}>

                    <li><Link href={"/sobre"}> Sobre</Link></li>
                    <li><Link href={"/Personagens"}> Personagens</Link></li>

                </nav>
            </div>
        </header>
    );
}
