import React from "react";


const Search = (props) => {

    return (
        <div class="ui large icon input">
            <input type="text" placeholder="Search users..." />
            <i className={`${props.icon} icon`}></i>
        </div>
    );
}

export default Search;