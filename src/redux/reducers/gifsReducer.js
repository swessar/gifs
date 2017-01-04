export function gifs(state = {
  images: []
}, action) {
  switch (action.type) {
    case 'GET_GIFS':
      return {
        ...state,
        images: action.images
      }
    default:
      return state;
  }
}
