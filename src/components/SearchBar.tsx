import React from "react";

interface SearchBarProps {

    onValueChange: (value: string) => void;
}
function SearchBar({ onValueChange }: SearchBarProps) {
    return (
        <div>
            <input
                onChange={(e) => onValueChange(e.target.value)}></input>
        </div>
    );
}

export default SearchBar;