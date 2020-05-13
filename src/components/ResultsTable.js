import React from 'react';
import orangeImg from './../img/orange.png';
import appleImg from './../img/apple.png';
import strawberryImg from './../img/strawberry.png';
import bananaImg from './../img/banana.png';

const ResultsTable = (props) => {
    return (
        <div className="table-container">
            <table>
                <tr>
                   <th>date</th>
                   <th><img src={bananaImg} alt="banana" /></th>
                    <th><img src={strawberryImg} alt="strawberry" /></th>
                    <th><img src={appleImg} alt="apple" /></th>
                    <th><img src={orangeImg} alt="orange" /></th>
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
