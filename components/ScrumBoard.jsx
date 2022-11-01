import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Column = dynamic(import("./Conference"));

const ScrumBoard = () => {
    const [winReady, setWinReady] = useState(false);
    useEffect(() => {
        setWinReady(true);
    }, []);
    return (
        <div>
            { winReady ? <Column /> : null }
        </div>
    );
}

export default ScrumBoard;