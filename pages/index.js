import { useState } from 'react'
import Link from 'next/link'
export default function Home() {
  const [goLink, setGoLink] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const createPage = async function() {
    const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://nextjs-app-inky.vercel.app";
    const res = await fetch(`${url}/api/pages/create?name=${name}&content=${content}`);
    const json = await res.json();
    alert("Success")
  }

  const updatePage = async function() {
    const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://nextjs-app-inky.vercel.app";
    const res = await fetch(`${url}/api/pages/update?name=${name}&content=${content}`);
    const json = await res.json();
    alert("Success")
  }

  return (
    <div>
      <div>
        <h4>Default Page</h4>
        <br/>
        <Link href="/pages/page1">
          <a>P1</a>
        </Link>
        <br/>
        <Link href="/pages/page2">
          <a>P2</a>
        </Link>
        <br/>
        <Link href="/pages/page3">
          <a>P3</a>
        </Link>
        <br/>
        <Link href="/pages/page4">
          <a>P4</a>
        </Link>
      </div>
      
      <div>
        <h4>Page Access</h4>
        <input id="link_input" placeholder="Page link (page1, page2...)" onChange={(evt) => setGoLink(evt.target.value)}/>
        <Link href={goLink ? `/pages/${goLink}`: ''}>
          <a onClick={() => document.getElementById("link_input").value = ""}>GO</a>
        </Link>
      </div>
      <div>
        <h4>Create Or Update</h4>
        <input placeholder="Page name(page1, page2...)" onChange={(evt) => setName(evt.target.value)}/>
        <input placeholder="Page content" onChange={(evt) => setContent(evt.target.value)}/>
        <button onClick={() => createPage()}>Create</button>
        <button onClick={() => updatePage()}>Update</button>
      </div>
    </div>
  )
}

