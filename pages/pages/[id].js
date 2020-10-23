import axios from 'axios'

export default function Page({page, cookie_query}) {
  return (
    <div>
      <h2>{page.name}</h2>
      <h2>cookie</h2>
      <p style={{wordBreak: "break-word"}}>{cookie_query.input_cookie}</p>
      <h2>authen_status</h2>
      <p>{cookie_query.status}</p>
      <h2>authen_response_body</h2>
      <p>{cookie_query.authen_body && JSON.stringify(cookie_query.authen_body)}</p>
    </div>
  )
}

Page.getInitialProps = async (ctx) => {
  const {cookie} = ctx.req.headers

  const response = await axios({
    method: 'get',
    url: `http://homeup.local:3000/check_auth_cms?format=json&client_id=c18112020900&method=abm_ips`,
    headers: {Cookie: cookie}
  })

  const {query} = ctx
  const url =
    process.env.NODE_ENV === "development"
      ? "http://homeup.local:9000/new_cms"
      : "https://cms-refactor-nextjs-app.herokuapp.com";
  const res = await fetch(`${url}/api/pages/${query.id}`);
  const json = await res.json();
  console.log(response.status)
  return {
    page: json,
    cookie_query: {
      status: response.status,
      input_cookie: cookie,
      authen_body: response.data
    }
  };
}

export function getCookie(cookie, cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
