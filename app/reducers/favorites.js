const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_CONTACT':
      return [
        ...state,
        action.contact
      ];
    default:
      return state;
  }
};

export default favorites;
