import React from 'react';
import ResultsTable from './ResultsTable';
import { Vega } from 'react-vega';

const Results = (props) => {
    let values = [];

    if (Object.keys(props.item).length !== 0) {
        const { bananas, strawberries, apples, oranges } = props.item.item;
        values = [
            {category: "bananas", amount: bananas},
            {category: "strawberries", amount: strawberries},
            {category: "apples", amount: apples},
            {category: "oranges", amount: oranges}
        ];
    }

    let spec = {
      "$schema": "https://vega.github.io/schema/vega/v5.json",
      "description": "Total daily sales",
      "width": 550,
      "height": 300,
      "padding": 15,
      "data": [
        {
          "name": "table",
          "values": values
        }
      ],
      "signals": [
        {
          "name": "tooltip",
          "value": {},
          "on": [
            {"events": "rect:mouseover", "update": "datum"},
            {"events": "rect:mouseout",  "update": "{}"}
          ]
        }
      ],
    
      "scales": [
        {
          "name": "xscale",
          "type": "band",
          "domain": {"data": "table", "field": "category"},
          "range": "width",
          "padding": 0.05,
          "round": true
        },
        {
          "name": "yscale",
          "domain": {"data": "table", "field": "amount"},
          "nice": true,
          "range": "height"
        }
      ],
      "axes": [
        { "orient": "bottom", "scale": "xscale" },
        { "orient": "left", "scale": "yscale" }
      ],  
      "marks": [
        {
          "type": "rect",
          "from": {"data":"table"},
          "encode": {
            "enter": {
              "x": {"scale": "xscale", "field": "category"},
              "width": {"scale": "xscale", "band": 1},
              "y": {"scale": "yscale", "field": "amount"},
              "y2": {"scale": "yscale", "value": 0}
            },
            "update": {
              "fill": {"value": "steelblue"}
            },
            "hover": {
              "fill": {"value": "cornflowerBlue"}
            }
          }
        },
        {
          "type": "text",
          "encode": {
            "enter": {
              "align": {"value": "center"},
              "baseline": {"value": "bottom"},
              "fill": {"value": "#333"}
            },
            "update": {
              "x": {"scale": "xscale", "signal": "tooltip.category", "band": 0.5},
              "y": {"scale": "yscale", "signal": "tooltip.amount", "offset": -2},
              "text": {"signal": "tooltip.amount"},
              "fillOpacity": [
                {"test": "datum === tooltip", "value": 0},
                {"value": 1}
              ]
            }
          }
        }
      ]
    }

    const handleHover = (...args) => console.log(args);
    const signalListeners = { hover: handleHover };

    const returnProperTimeFormat = () => {
        if (!props.selectedDate) return "unavailable";

        const str = String(props.selectedDate);
        return " for " + str.slice(0,15);
    }

    return (
        <div className="results">
            <h4>Results <span>{returnProperTimeFormat()}</span></h4>
            <ResultsTable date={props.item.date} item={props.item.item}/>
            {Object.keys(props.item).length !== 0 && <Vega spec={spec} signalListeners={signalListeners} /> }
        </div>
    );
};

export default Results;
