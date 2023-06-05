import { ADD_ARTICLE, REMOVE_ARTICLE } from './actions.jsx'

//define initial state
const initialState = {
  articles: [],
};

//define reducer function (takes current state + action triggered to return the new state as a result of the action)
const reducerFunction = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ARTICLE:
      return {
              ...state,
              articles: [...state.articles, action.payload],
       };

    case REMOVE_ARTICLE:
        return{
          ...state,
          articles: state.articles.filter( article => article != state.articles[action.payload] ) ,
        };

    default:
      return state
  }
}

export default reducerFunction;
