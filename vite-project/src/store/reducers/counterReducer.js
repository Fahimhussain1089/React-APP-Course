
const initalState = { count: 0 };

const counterReducer = (state = initalState , action ) => {
    switch (action.type) {
        case 'INCREMENT':
            return{ count: state.count + 1 }; 
        case 'DECREMENT':
            return{ count: state.count - 1 };     
    
        default:
            return state;
          //  break;
    }

};
export default counterReducer;