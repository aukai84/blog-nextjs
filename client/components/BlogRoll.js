import React from 'react'
import Link from 'next/link'

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
        <Link as={`/post/${this.props.id}`} href={`/post?id=${this.props.id}`}>
          <a>{this.props.title}</a>
        </Link>
      </div>
    )
  }

}

export default BlogRoll;
