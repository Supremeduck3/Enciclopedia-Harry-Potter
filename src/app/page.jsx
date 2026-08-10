import styles from './page.module.css';
import Header from './../components/Header';
import Image from 'next/image';
export default function Home() {
    return (

        <main className={styles.main}>
            <Header />
            <Image
                src={"/images/banner5.jpg"}
                width={1000}
                height={500}
                alt='Banner Harry potter'
                className={styles.imagem}
            />

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

    );
}
