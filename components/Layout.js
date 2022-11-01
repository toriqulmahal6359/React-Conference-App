import Navbar from "./Navbar";
import Hero from "./Hero";
import HomeTable from "./Table";
import ScrumBoard from "./ScrumBoard";
import styles from "../styles/layout.module.css";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HomeTable />
            <ScrumBoard />
            <div className={styles.layout_container}>
                
            </div>
        </div>
    )
}

export default Layout;