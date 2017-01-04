export function openForm(state = {
  openForm: false
}, action) {
  switch (action.type) {
    case 'OPEN_FORM':
      return {
        ...state,
        openForm: true
      }
    case 'CLOSE_FORM':
      return {
        ...state,
        openForm: false
      }
    default:
      return state;
  }
}
