import React from "react";


const Search = (props) => {

    return (
        <div className="ui large icon input">
            <input
                value={props.value}
                onChange={props.handleInputChange}
                type="text"
                placeholder="Search users..."
            />
            <i className={`${props.icon} icon`}></i>
        </div>
    );
}

export default Search;