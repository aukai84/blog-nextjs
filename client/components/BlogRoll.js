import React from 'react'

class BlogRoll extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, 'props');

    return (
      <div>
        {this.props.title}
        {this.props.slug}
        {this.props.created_by}
      </div>
    )
  }

}

export default BlogRoll;
