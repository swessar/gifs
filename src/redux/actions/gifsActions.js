import data from '../../data';

export function getGifs () {
  return (dispatch, getState) => {
    dispatch({
      type: 'GET_GIFS',
      images: data.images
    });
  }
}
