export function addFavorite (item) {
  return (dispatch, getState) => {
    const { favorites } = getState();

    const newItems = [...favorites.items, item];
    // localStorage.setItem('gifs_favorites', JSON.stringify(newItems));

    dispatch({
      type: 'ADD_FAVORITE',
      items: newItems
    });
  }
}

export function removeFavorite (item) {
  return (dispatch, getState) => {
    const { favorites } = getState();

    const newItems = favorites.items.filter(i => i != item);
    // localStorage.removeItem('gifs_favorites', JSON.stringify(newItems));

    dispatch({
      type: 'REMOVE_FAVORITE',
      items: newItems
    });
  }
}
