export default function Dynamic(props) {
  return <div>{props.title}</div>
}

export async function getServerSideProps(context) {
  return {
    props: {title: "test"}
  }
} 
