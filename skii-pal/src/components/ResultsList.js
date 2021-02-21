import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroll-component';
import { Result } from './Result';
import { nextPage } from '../redux/search/search.actions'
import no_item from '../assets/no_item.png'
import './ResultList.css'

import Grid from '@material-ui/core/Grid';


const ResultsList = ({ results, screenshots }) => {

    if (results.length == 0) {
        return (
            <div className="Not-found-contain">
                <p className="no-item">There is no result to show</p>
            </div>
        )
    }
    else {
        return (
        <div>
            {results.map(item => (<Result key={item.team_id} data={item} screenshots={screenshots} />))}
        </div>)
    }
}

export default ResultsList