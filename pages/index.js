import fetch from 'isomorphic-unfetch'

function HomePage({ stars }) {
  return <React.Fragment>
      <head>
          <title>default title</title>
      </head>
      
      <div>Next stars: {stars} -> get from server</div>
  </React.Fragment>
}

HomePage.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default HomePage