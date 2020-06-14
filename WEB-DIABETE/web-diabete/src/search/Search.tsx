import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSearch } from 'features/search/search';
import { ReactComponent as SearchIcon } from 'shared/icons/search.svg';
import { SearchResults } from './search-results/SearchResults';
import './search.scss';

export const Search: FC = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const search = () => dispatch(handleSearch(input));

  return <div className="search">
    <form className="search-bar" onSubmit={e => {e.preventDefault(); search()}}>
      <input
        className="search-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type product name..."
        autoFocus
      />
      <div className="search-button" onClick={search}><SearchIcon className="searchFood-icon" type="submit" /></div>
    </form>
    <SearchResults />
  </div>
}
