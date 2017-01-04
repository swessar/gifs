import React from 'react';
import Image from '../Image/Image';

export default class Images extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <div className="Section Section--images">
        {Object.keys(images).map((i) => {
          const { image, gif, keywords } = images[i];

          return <Image
            key={i}
            id={i}
            imageUrl={image}
            gifUrl={gif}
            keywords={keywords}
            doSearch={this.props.doSearch}
            tipText="Copy to clipboard"
            tipTextCopied="Copied!"
          />
        })}
      </div>
    )
  }
}
