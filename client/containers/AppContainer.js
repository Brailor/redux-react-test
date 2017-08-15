import React from 'react';
import { connect } from 'react-redux';
import {get} from 'immutable';
import App from '../components/App';
import {toggleTable} from '../actions/actions';

const mapStateToProps = state => {
    return {
       tableList: state.getIn(['tableList', 'list']),
       isFetching: state.getIn(['tableList', 'isFetching'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTable: (tableId) => {
            dispatch(toggleTable(tableId))
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer;