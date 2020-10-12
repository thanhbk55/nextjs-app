export default function Page() {
  return (
    <div>
      <h2>aaa</h2>
    </div>
  )
}

// export default function Page({page}) {
//   return (
//     <div>
//       <h2>{page.name}</h2>
//       <p>{page.content}</p>
//     </div>
//   )
// }
// export async function getStaticPaths() {
//   // const url =
//   //   process.env.NODE_ENV === "development"
//   //     ? "http://localhost:3000"
//   //     : "https://cms-refactor-nextjs-app.herokuapp.com";
//   // const res = await fetch(`${url}/api/all`);
//   // const json = await res.json();

//   const paths = [{name: "page0"},{name: "page1"},{name: "page2"},{name: "page3"},{name: "page4"},{name: "page5"}].map((j) => ({
//     params: { id: j.name },
//   }))

//   return { paths, fallback: false }
// }

// export async function getStaticProps({params}) {
//   const url =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://cms-refactor-nextjs-app.herokuapp.com";
//   const res = await fetch(`${url}/api/pages/${params.id}`);
//   const json = await res.json();
  
//   return {
//     props: {
//       page: json
//     }
//   };
// }