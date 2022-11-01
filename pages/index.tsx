export default function Home() {
  return (
    <h1>home</h1>

  )
}
export async function getStaticProps() {
  const content = null;

  if (!content) {
    return {
      redirect: {
        permanent: false,
        destination: '/menu',
      },
    };
  }

  return {
    props: {},
  };
}
