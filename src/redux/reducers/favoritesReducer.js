function getInitialState() {
  return {
    items: getStoredFavorites(),
    isFetching: false
  }
}

export default function favorites(state = getInitialState(), action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        items: action.items
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        items: action.items
      }
    default:
      return state;
  }
}

function getStoredFavorites() {
  return JSON.parse(localStorage.getItem('gifs_favorites')) || [];
}
