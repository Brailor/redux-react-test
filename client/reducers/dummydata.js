import {fromJS} from 'immutable';

const initialState = fromJS({
    tableList: {
          isFetching: false,
          needToUpdate: false,
          lastUpdated: null,
          networkErrors: [],
          filter: '',
          list: []
    }
  });

  export default initialState;