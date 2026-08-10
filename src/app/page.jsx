import styles from './page.module.css';
import Header from './../components/Header';
import Image from 'next/image';
export default function Home() {
    return (
        <>
            <Header />
            <Image
                src={"/images/banner4.webp"}
                width={1000}
                height={500}
                alt='Banner Harry potter'
                className={styles.imagem}
            />
            <main>
                <section className={styles.grid}>
                    <div className={styles.sobre}>
                        <h1>Sobre</h1>
                    </div>
                    <div className={styles.tecnologias}>
                        <h1>Tecnologias</h1>
                    </div>
                    <div className={styles.objetivo}>
                        <h1>Objetivo</h1>
                    </div>
                </section>
            </main>
        </>
    );
}
