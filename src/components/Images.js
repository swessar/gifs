import React from 'react';
import Image from './Image';

export default class Images extends React.Component {
  render() {
    return (
      <div className="Section Section--images">
        {this.props.images.map((image, i) => {
          return <Image
            key={i}
            id={image.id}
            imageUrl={image.image}
            gifUrl={image.gif}
            keywords={image.keywords}
            doSearch={this.props.doSearch}
            tipText="Copy to clipboard"
            tipTextCopied="Copied!"
          />
        })}
      </div>
    )
  }
}
