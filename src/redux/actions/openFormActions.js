export function openForm(openFormState) {
  return function(dispatch) {
    if (!openFormState) {
      dispatch({
        type: "OPEN_FORM",
        openForm: true
      });
    } else {
      dispatch({
        type: "CLOSE_FORM",
        openForm: false
      });
    }
  }
}
