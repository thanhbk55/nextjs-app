import Link from 'next/link'
export default function Home() {

  return (
    <div>
      CMS
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
  )
}

