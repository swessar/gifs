export function addFavorite (item) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_FAVORITE',
      item: item
    });
  }
}
