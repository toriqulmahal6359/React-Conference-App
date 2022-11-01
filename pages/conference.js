import Navbar from "../components/Navbar";
import Head from "next/head";
import ScrumBoard from "../components/ScrumBoard";

export default function conference() {
    return (
        <div>
            <Head>
                <Navbar />
                <ScrumBoard />
            </Head> 
        </div>
    )
}