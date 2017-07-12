import React from 'react'
import 'isomorphic-fetch'

class post extends React.Component {
  constructor(props) {
    super(props);

    console.log(props, 'props');
  }


  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  }

}

export default post;
