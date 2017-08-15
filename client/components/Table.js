import React from 'react';

const Table = ({tableData, id, toggleTable}) => {
    return (
        <div className='table-wrapper'>
            <li onClick={() => toggleTable(id)} className="list-group-item tablelist-item">
                <div className="row">
                    <span className="col-xs-2">Id: {id}</span>
                    <span className="col-xs-8"> <b>Title: </b>{tableData.get('title')}</span>
                    <span className="col-xs-2">
                        <button onClick={() => console.log("feff")}  className="btn btn-success">View</button>
                    </span>
                </div>
            </li>
            {tableData.get('isToggled') ? (<div><p className='bg bg-success'><b>Table description: <br /></b>{tableData.get('body')}</p></div>) : ''}
        </div>
        
    )
}

export default Table