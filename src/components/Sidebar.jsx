import { PencilLine }from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=720'
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgN92ocEin_abypno3cwU093us_aTzI7rY7ZdDRKWc6wQnuvH1'/>
                <strong>Renato Cariani</strong>
                <span>Químico e Atleta</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
