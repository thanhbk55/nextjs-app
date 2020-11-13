export default function Page({page}) {
  return (
    <div>
      <h2>{page.name}</h2>
      <p>{page.content}</p>
    </div>
  )
}

// Page.getInitialProps = async ({query}) => {
//   const url =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://cms-refactor-nextjs-app.herokuapp.com";
//   const res = await fetch(`${url}/api/pages/${query.id}`);
//   const json = await res.json();
  
//   return {
//     page: json
//   };
// }

export async function getStaticPaths() {
  // const url =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : "https://cms-refactor-nextjs-app.herokuapp.com";
  // const res = await fetch(`${url}/api/all`);
  // const json = await res.json();

  // const paths = json.map((j) => ({
  //   params: { id: j.name },
  // }))

  const paths = [{name: "page0"},{name: "page1"},{name: "page2"},{name: "page3"},{name: "page4"}].map((j) => ({
    params: { id: j.name },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://cms-refactor-nextjs-app.herokuapp.com";
  const res = await fetch(`${url}/api/pages/${params.id}`);
  const json = await res.json();
  
  return {
    props: {
      page: json
    }
  };
}
