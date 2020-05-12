import React from 'react';
import ResultsGraph from './ResultsGraph';
import ResultsTable from './ResultsTable';

const Results = (props) => {
    return (
        <div className="results">
            <ResultsTable />
            <ResultsGraph />
        </div>
    );
};

export default Results;
