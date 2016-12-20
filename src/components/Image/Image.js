import React from 'react';
import { connect } from 'react-redux';
import Clipboard from 'clipboard';
import ReactTooltip from 'react-tooltip';
import { addFavorite, removeFavorite } from '../../redux/actions/favoritesActions';

class Image extends React.Component {
  constructor(props) {
    super(props);

    const { imageUrl, favorites, id } = this.props;

    this.state = {
      imageUrl: imageUrl,
      activeItem: favorites.items.includes(id)
    }
  }

  componentWillMount(){
    new Clipboard('.Image-img');
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    this.setState({
      imageUrl: nextProps.imageUrl,
      keywords: nextProps.keywords,
      activeItem: nextProps.favorites.items.includes(nextProps.id)
    });
  }

  copyGif(){
    this.setState({
      tipText: this.props.tipTextCopied
    });
  }

  // Set gif as src
  loadGif(){
    this.setState({
      imageUrl: this.props.gifUrl
    });
  }

  // Set image as src
  loadImage(){
    this.setState({
      imageUrl: this.props.imageUrl,
      tipText: this.props.tipText
    });
  }

  keywordSearch(keyword){
    this.props.doSearch(keyword);
  }

  _toggleFavorite () {
    const { dispatch, id } = this.props;
    const { activeItem } = this.state;

    // Remove favorite
    if (activeItem) {
      dispatch(removeFavorite(id));
    }
    // Add favorite
    else {
      dispatch(addFavorite(id));
    }
  }

  render() {
    const { gifUrl, tipText, imageUrl, keywords } = this.props;

    return (
      <div className="Image">
        <img
          className="Image-img"
          data-clipboard-text={ gifUrl }
          data-tip={ tipText }
          data-effect="solid"
          data-type="light"
          src={ this.state.imageUrl }
          gifUrl={ gifUrl }
          onClick={this.copyGif.bind(this)}
          onMouseOver={this.loadGif.bind(this)}
          onMouseOut={this.loadImage.bind(this)}
        />
        {keywords.map((keyword, i) => {
          return <span
            key={i}
            className="Image-keyword"
            ref="imageKeyword"
            onClick={this.keywordSearch.bind(this, keyword)}
            >{keyword},</span>
        })}
        <div
          className={"Favorite" + (this.state.activeItem ? " is-active" : "")}
          onClick={this._toggleFavorite.bind(this)}
        ></div>
        <ReactTooltip />
      </div>
    )
  }
}

export default connect(
  state => ({
    favorites: state.favorites
  })
)(Image);
