import React from 'react';
import Clipboard from 'clipboard';
import ReactTooltip from 'react-tooltip';

export default class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: this.props.imageUrl,
      gifUrl: this.props.gifUrl,
      tipText: this.props.tipText,
      keywords: this.props.keywords
    }
  }

  componentWillMount(){
    new Clipboard('.Image-img');
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imageUrl: nextProps.imageUrl,
      keywords: nextProps.keywords
    });
  }

  copyGif(){
    this.setState({
      tipText: this.props.tipTextCopied
    });
  }

  loadGif(){
    this.setState({
      imageUrl: this.props.gifUrl
    });
  }

  loadImage(){
    this.setState({
      imageUrl: this.props.imageUrl,
      tipText: this.props.tipText
    });
  }

  keywordSearch(keyword){
    console.log(keyword)
  }

  updateTooltip(){

  }

  render() {
    return (
      <div className="Image">
        <img
          className="Image-img"
          data-clipboard-text={this.state.gifUrl}
          data-tip={this.state.tipText}
          data-effect="solid"
          data-type="light"
          src={this.state.imageUrl}
          gifUrl={this.state.gifUrl}
          onClick={this.copyGif.bind(this)}
          onMouseOver={this.loadGif.bind(this)}
          onMouseOut={this.loadImage.bind(this)}
        />
        {this.props.keywords.map((keyword, i) => {
          return <span
            key={i}
            className="Image-keyword"
            ref="imageKeyword"
            onClick={this.keywordSearch.bind(this, keyword)}
            >{keyword},</span>
        })}
        <ReactTooltip />
      </div>
    )
  }
}
