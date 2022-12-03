import LayoutMenu from "../../../components/LayoutMenu";




export default function IdMenu() {

    return (
        /* 
        ** Component that shows the entire menu view with its description and prices 
        */
        <LayoutMenu dataMenus={[]}>

        </LayoutMenu>


    );
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