import React from 'react';
import Image from './Image';

export default class Images extends React.Component {
  render() {
    return (
      <div className="Section">
        {this.props.images.map((image, i) => {
          return <Image
            key={i}
            imageUrl={image.image}
            gifUrl={image.gif}
            keywords={image.keywords}
            tipText="Copy to clipboard"
            tipTextCopied="Copied!"
          />
        })}
      </div>
    )
  }
}