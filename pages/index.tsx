export default function Home() {
  return (
    <h1>ERROR</h1>

  )
}
export async function getStaticProps() {
  const content = null;

  if (!content) {
    return {
      redirect: {
        permanent: true,
        destination: '/menu',
      },
    };
  }

  return {
    props: {},
  };
}
