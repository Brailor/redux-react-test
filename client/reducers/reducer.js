import initialState from './dummydata';
import Immutable from 'immutable';



const tableList = (state = initialState, action) => {
	if (action.type === 'REQUEST_TABLELIST') {
		return state.setIn(['tableList', 'isFetching'], true);
	}
	if (action.type === 'RECEIVE_TABLELIST') {
		return state.setIn(['tableList', 'list'], Immutable.fromJS(action.tableList)).setIn(['tableList', 'isFetching'], false)
			.setIn(['tableList', 'lastUpdated'], action.lastUpdated);
	}
	if (action.type === 'TOGGLE_TABLE') {
		return state.setIn(['tableList', 'list', action.tableId, 'isToggled'], !state.getIn(['tableList', 'list', action.tableId, 'isToggled']));
	}
	/* TODO: létrehozni egy filter nevű változót a state-ben és az alapján csinálni a szűrést */
	if (action.type === 'HANDLE_SEARCH') {

		return state.setIn(['tableList', 'filter'], action.input)
			.setIn(['tableList', 'list'], state.getIn(['tableList', 'list'])
				.filter(table => table.get('title').includes(state.getIn(['tableList', 'filter']))))
	}
	return state;
}
/* return state.setIn(['tableList', 'list'], state.getIn(['tableList', 'list'])
.filter(table => table.get('title').includes(action.input))) */

export default tableList;