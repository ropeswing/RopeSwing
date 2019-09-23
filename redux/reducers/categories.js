const intialState = {
  categories:['book','movie']
};

export default categories = (state = intialState, action) => {
  switch(action.type){
    case 'categories/new':      
      return {...state, categories: [...state.categories, action.payload]}
   default:
      return state;
  };
};