

export default function widgets(state = [], action) {

  switch (action.type) {
    case 'ADD_WIDGET':
      return [...state, {
        name : action.name,
        count : action.count,
        color : action.color
      }];
    case 'CHANGE_WIDGET':
      const i = action.index;
      return [...state.slice(0,i),
             Object.assign({}, state[i], {name : action.name, count : action.count, color : action.color }),
              ...state.slice(i+1)
      ];
    default:
      return state;
  }

}

