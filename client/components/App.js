import React from 'react';
import Table from './Table';
import HeaderContainer from '../containers/HeaderContainer';
import SearchContainer from '../containers/SearchContainer';

const App = ({tableList, isFetching, toggleTable}) => {
    return (
        <div className="container">
            <HeaderContainer />
            <SearchContainer />
            <div className="col-xs-8 col-xs-offset-2">
                { isFetching ? <h1>Loading...</h1> : tableList.map((table, index) => (
                    <Table toggleTable={toggleTable} key={index} id={index} tableData={tableList.get(index)}/>))}
            </div>
        </div>
    )
}

export default App