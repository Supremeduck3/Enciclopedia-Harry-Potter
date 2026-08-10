import styles from './page.module.css';
import Header from './../components/Header';
import Image from 'next/image';
export default function Home() {
    return (
        <>
        <Header/>
        <Image
        src={"/images/banner3.jpg"}
        width={1000}
        height={500}
        alt='Banner Harry potter'
        className={styles.imagem}
        />
        <main>
            
        </main>
        </>
    );
}
