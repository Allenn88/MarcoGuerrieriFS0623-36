import React from 'react';

const Search = () => {
    return (
        <div className="input-group mt-3">
            <input
                type="text"
                className="form-control mb-2"
                id="searchField"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
            />
            <div
                className="input-group-append"
                style={{ marginBottom: '4%' }} 
            >
                <button
                    className="btn btn-outline-secondary btn-sm"
                    type="button"
                    id="button-addon1"
                   /*  onClick={search}  */
                >
                    GO
                </button>
            </div>
        </div>
    );
};

export default Search;

