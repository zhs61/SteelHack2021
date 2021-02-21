import * as React from 'react';
import { Result } from './Result';
import './ResultList.css'



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