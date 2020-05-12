import React from 'react';
import orangeImg from './../orange.png';
import appleImg from './../apple.png';
import strawberryImg from './../strawberry.png';
import bananaImg from './../banana.png';

const ResultsTable = (props) => {
    return (
        <div className="table-container">
            <table>
                <tr>
                   <th>date</th>
                   <th><img src={bananaImg}/></th>
                    <th><img src={strawberryImg}/></th>
                    <th><img src={appleImg}/></th>
                    <th><img src={orangeImg}/></th>
                </tr>
                <tr>
                <td><span className="currentDate">{props.date}</span></td>
                    <td>{props.item.bananas}</td>
                    <td>{props.item.strawberries}</td>
                    <td>{props.item.apples}</td>
                    <td>{props.item.oranges}</td>
                </tr>
            </table>
        </div>
    );
}

ResultsTable.defaultProps = {
    item: {
        bananas: 0,
        apples: 0,
        strawberries: 0,
        oranges: 0
    }
}

export default ResultsTable;
