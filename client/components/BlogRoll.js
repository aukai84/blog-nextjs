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
        <Link href={this.props.slug}><a>{this.props.title}</a></Link>
      </div>
    )
  }

}

export default BlogRoll;
