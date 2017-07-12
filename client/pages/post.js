import React from 'react'
import fetch from 'isomorphic-fetch'

class post extends React.Component {

  static async getInitialProps() {
    const res = await fetch('http://localhost:8080/api/post')
    // const statusCode = res.statusCode > 200 ? res.statusCode : false
    const json = await res.json()
    return { json }
  }

  render() {
    console.log(this.props, 'props');
    if(this.props.statusCode) {
       return <Error statusCode={this.props.statusCode} />
    }
    return (
      <div>
        <p>Blog Title: {this.props.json[0].title}</p>
      </div>
    )
  }

}

export default post;
