import Image from "next/image";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_wrapper}>
                <div className={styles.navbar_left}>
                    <Image src="/img/React 4.png" alt="react_conference_logo" width={90} height={25} />
                </div>
                <div className={styles.navbar_center}>
                    <ul className={styles.nav_list}>
                        <li className={styles.nav_item}>About Us</li>
                        <li className={styles.nav_item}>What We Do</li>
                        <li className={styles.nav_item}>Our Work</li>
                        <li className={styles.nav_item}>Blog</li>
                        <li className={styles.nav_item}>Say Hi</li>
                    </ul>
                </div>
                <div className={styles.hamburger}>
                    <div className={styles.navbar_vector}>☰</div>
                </div>
            </div>  
        </div>

    )
}

export default Navbar