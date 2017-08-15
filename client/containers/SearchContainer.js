import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import {handleSearch} from '../actions/actions';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearch: (input) => {
            dispatch(handleSearch(input))
        }
    }
}

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)

export default SearchContainer;