

export default function activeWidgetId(state=100, action) {

  switch (action.type) {
    case 'SELECTED':
      return action.index
    default:
      return state;
  }

}