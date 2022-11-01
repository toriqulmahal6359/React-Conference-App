import { useRouter } from "next/router";

const query = () => {
    const router = useRouter();
    const pages = router.query.jspage;

    return (
        {pages}
    )
}

export default query;