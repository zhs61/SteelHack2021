import React from 'react';
import { Link } from 'react-router-dom';

import SearchBox from './SearchBox'
import ResultsList from './ResultsList'
import Outline from './Outline'
import './ResultView.css'
import { search, handleKey, setQuery } from '../redux/search/search.actions'
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';

export const ResultsView = ({ results, outline, screenshots, query, loadingStatus }) => {
    const mobile = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry'];


    if (results.length == 0) {
        return (
            <div>
                <SearchBox query={query} />
                <ResultsList results={results} screenshots={screenshots} />
            </div>
        )
    }

    return (
        <div>
        <SearchBox query={query} />
        <Outline outline={outline} />
            {loadingStatus === true
                ? <div className={mobile.includes(navigator.platform) ? "" : "load-wrap"}><CircularProgress /></div>
                : <ResultsList results={results} screenshots={screenshots} />
            }
        </div>
    )
}