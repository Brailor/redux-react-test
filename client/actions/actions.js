import {RECEIVE_TABLELIST, REQUEST_TABLELIST, ERROR_TABLELIST, TOGGLE_TABLE, HANDLE_SEARCH} from './actionlist';

export const requestTableList = () => {
    console.log("tablelist meghívása elkezdődött");
    return {
        type: REQUEST_TABLELIST
    }
}

export const receiveTableList = (tableList) => {
    console.log("tablelist megvan");
    return {
        type: RECEIVE_TABLELIST,
        tableList,
        lastUpdated: Date.now()
    }
}

export const toggleTable = (tableId) => {
    return {
        type: TOGGLE_TABLE,
        tableId
    }
}

export const fetchTableList = () => {
    return (dispatch) => {
        dispatch(requestTableList());
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json(),
                  err => console.log('An error occured: ' + err)
            )
            .then(tableList => tableList.map(item => Object.assign(item, {isToggled: false})))
            .then(tableList => dispatch(receiveTableList(tableList)))
    }
}

export const handleSearch = (input) => {
    return {
        type: HANDLE_SEARCH,
        input
    }
}
