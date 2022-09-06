import React, { useState, useEffect } from 'react';
import { StyledSearch } from './styledSearch';
import { SearchIconWrapper } from './searchIconWrapper';
import { StyledInputBase } from './styledInputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function PostSearchBar({ searchCallback }) {

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            searchCallback(searchTerm);
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    return (
        <StyledSearch>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                onChange={handleChange}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </StyledSearch>
    );
}