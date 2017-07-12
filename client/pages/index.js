import React from 'react'
import BlogRoll from '../components/BlogRoll'
import fetch from 'isomorphic-fetch'

class Home extends React.Component {

  static async getInitialProps() {
    const res = await fetch('http://localhost:8080/api/post')
    // const statusCode = res.statusCode > 200 ? res.statusCode : false
    const json = await res.json()
    return { json }
  }

  render() {
    console.log(this.props.json, 'props');
    if(this.props.statusCode) {
       return <Error statusCode={this.props.statusCode} />
    }
    return (
      <div>
        {this.props.json.map((post) => {
          return(
            <BlogRoll
              key={post.id}
              title={post.title}
              slug={post.slug}
              created_by={post.created_by}
            />
          );
        })}
      </div>
    )
  }

}

export default Home;
