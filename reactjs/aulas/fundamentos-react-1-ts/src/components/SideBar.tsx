import styles from './SideBar.module.css';
import headerSideBar from '../assets/headerSideBar.jpeg';
import { Avatar } from './Avatar';


export function SideBar() {
    return (
       <aside className={styles.sidebar}>
            <img src={headerSideBar} alt="plano de fundo do sideBar" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/156031298?v=4"/>

                <strong>Mika Marques</strong>
                <p>Software Developer</p>
            </div>

            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
       </aside>
    )
}