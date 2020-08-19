export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      //below code is to create an empty array and add an payload object to this array.
        //this array would have current state data and add an payload object to it.
      return [...state, action.payload];
    default:
      return state;
  }
};
