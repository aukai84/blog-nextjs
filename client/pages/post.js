import React from 'react'
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-fetch'

class post extends React.Component {

  // static async getInitialProps() {
  //   const res = await fetch('http://localhost:8080/api/post')
  //   // const statusCode = res.statusCode > 200 ? res.statusCode : false
  //   const json = await res.json()
  //   return { json }
  // }

  render() {
    console.log(this.props, 'props post');
    if(this.props.statusCode) {
       return <Error statusCode={this.props.statusCode} />
    }
    return (
      <Layout>
        <div>
          <p>Blog Title: {this.props.title}</p>
        </div>
      </Layout>
    )
  }

}

export default post;
