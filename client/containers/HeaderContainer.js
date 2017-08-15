import React from 'react';
import { connect } from 'react-redux';
import {get} from 'immutable';
import Header from '../components/Header';
import {fetchTableList} from '../actions/actions';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTableList: () => dispatch(fetchTableList()),
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderContainer;