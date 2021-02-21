
import * as React from 'react';
import { connect } from 'react-redux';
import { SearchBox } from '../SearchBox';
import { ResultsView } from '../ResultsView';

export const Search = ({
    results,
    loadingStatus,
    outline,
    query,
}) => {
    if (loadingStatus === true) {
        return <ResultsView query={query} loadingStatus={loadingStatus} outline={outline} />;
    } else if (loadingStatus === false) {
        return (
            <ResultsView
                results={results}
                outline={outline}
                query={query}
                loadingStatus={loadingStatus}
            />
        );
    }
};

const mapStateToProps = (state) => {
    return {
        results: state.results,
        loadingStatus: state.loadingStatus,
        outline: state.outline,
        query: state.query,
        counter: state.counter
    };
};

export default connect(mapStateToProps)(Search);
