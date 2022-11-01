import styles from "../styles/hero.module.css";
import ScrumBoard from "./ScrumBoard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Hero = () => {

    const router = useRouter();
    
    return (
        <div>
            <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroHeadline}>
                    <Image className={styles.heroFrame} src="/img/hero/Frame.svg" width={100} height={100} />
                    <h1 className={styles.heroHeadline}><span className={styles.heroFirst}>React</span><br /><span className={styles.heroSecond}>Conference</span></h1>
                </div>
                <div className={styles.heroDescription}>
                <Image className={styles.heroVector} src="/img/hero/Vector 1.svg" width={940} height={832} />
                    <Image className={styles.heroSideImage} src="/img/hero/Side image.png" width={400} height={500} />
                    <div className={styles.heroParagraph}>
                        <p className={styles.heroDetails}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, voluptate? Laudantium tenetur, sequi nisi alias qui facere voluptate quaerat nam facilis eum cumque.</p>
                        <div><Link href="/conference"><button onClick={() => router.push('/conference')} className={styles.heroButton}><span className={styles.clickToMe}>Buy Tickets <Image src="/img/hero/bi_arrow-up-right.svg" width={15} height={15} /></span></button></Link></div>
                    </div>
                </div>
                <div className={styles.heroMainImg}>
                    <Image className={styles.heroImage} src="/img/hero/Rectangle 1.png" width={450} height={400} />
                    <Image className={styles.heroStar} src="/img/hero/Star 2.svg" width={150} height={150} />
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Hero;