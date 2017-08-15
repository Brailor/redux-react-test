import React,{Component} from 'react';

const Search = ({handleSearch}) => {
    let inputVal = '';
    return (
        <div>
            <input type="text" ref={(input) => {inputVal = input;}} onChange={() => handleSearch(inputVal.value)}/>
        </div>
    )
}

export default Search