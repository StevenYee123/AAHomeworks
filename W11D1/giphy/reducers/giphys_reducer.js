import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';

const giphysReducer = (status = [], action) => {
    switch(action.type){
        case RECEIVE_SEARCH_GIPHYS:
            return action.giphys; 
        default:
            return status;
    }
};

export default giphysReducer;