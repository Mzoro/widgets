
export function selected(i) {
  return (dispatch, getState) => {
  console.log(getState().widgets[i])  
  const widget = getState().widgets[i]
  dispatch({ 
    type: 'SELECTED',
    index: i,
    name: widget.name,
    count : widget.count,
    color : widget.color
  })  
  };
}

export function select(i) {
  return {
    type: "SELECT_WIDGET",
    index: i
  };
}
export function updateForm(name, count, color) {
  return {
    type: "FORM_UPDATE",
    name,
    count,
    color
  };
}
// export function updateCount(count) {
//   return {
//     type: "FORM_UPDATE_COUNT",
//     count
//   };
// }
// export function updateColor(color) {
//   return {
//     type: "FORM_UPDATE_COLOR",
//     color  
//   };
// }
/*
  Comments
*/

export function addWidget(name, count, color) {
  return {
    type: 'ADD_WIDGET',
    color, 
    count,
    name
  };
}

export function changeWidget(i, name, count, color) {
  return {
    type: 'CHANGE_WIDGET',
    index: i,
    color, 
    count,
    name
  };
}

export function update(name, value) {
  return {
    type: "FORM_UPDATE_VALUE",
    name, value
  };
}

// export function reset() {
//   return {
//     type: "FORM_RESET"
//   };
// }