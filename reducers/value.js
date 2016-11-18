export default function value(state={}, action) {

  switch (action.type) {
    case 'FORM_UPDATE':
      return Object.assign({}, state, {name : action.name, 
                                      count : action.count, 
                                      color : action.color })
    case 'SELECTED':
      return Object.assign({}, state, {name : action.name, 
                                      count : action.count, 
                                      color : action.color })
    default:
      return state;
  }

}