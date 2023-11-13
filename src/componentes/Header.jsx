import styles from './Header.module.css'
import igniteLogo from '../assets/igniteLogo.svg'
export function Header() {
    return (
        <header className={styles.header}>
            <strong ><img src={igniteLogo} alt="Logotipo" /></strong>
        </header>
    )
}