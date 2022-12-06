export default function IdMenu() {
    return (
        <div></div>
    )
}

export async function getServerSideProps() {
    const content = null;
    if (!content) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
        };
    }

    return {
        props: {},
    };
}