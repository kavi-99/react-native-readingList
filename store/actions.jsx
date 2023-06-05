// actions.js

// Action types
const ADD_ARTICLE = 'ADD_ARTICLE';
const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

// Action creators
function addToList(article) {
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
}

function removeFromList(article) {
  return {
    type: REMOVE_ARTICLE,
    payload: article,
  };
}

export {ADD_ARTICLE, REMOVE_ARTICLE, addToList, removeFromList};
