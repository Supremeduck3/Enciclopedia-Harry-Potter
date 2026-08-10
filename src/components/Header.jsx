import react from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Header.module.css"
export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.titulo}>
                <Image
                src={"/icons/icon-harray.png"}
                height={100}
                width={200}
                className={style.imagem}
                alt="Logo do ministerio da magia"
            />
            <h1>Enciclopedia Mágica</h1>
            </div>
            <div className={style.navegacao}>
                <nav className={style.nav}>
                    <li><Link href={"/sobre"} className={style.text}> Sobre</Link></li>
                    <li><Link href={"/Personagens"}className={style.text}> Personagens</Link></li>
                </nav>
            </div>
        </header>
    );
}
