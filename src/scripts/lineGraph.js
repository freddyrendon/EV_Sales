// class lineGraph {
//     constructor(){
//         this.drawLineGraph();
//     }

//     drawLineGraph (){
//         // set the dimensions and margins of the graph
//         const margin = { top: 10, right: 30, bottom: 30, left: 60 },
//             width = 550 - margin.left - margin.right,
//             height = 547 - margin.top - margin.bottom;

//         // append the svg object to the body of the page
//         const svg = d3.select("#Linegraph")
//             .append("svg")
//             .attr("width", width + margin.left + margin.right)
//             .attr("height", height + margin.top + margin.bottom)
//             .append("g")
//             .attr("transform",
//                 "translate(" + margin.left + "," + margin.top + ")");

//         //Read the data
//         d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

//             // When reading the csv, I must format variables:
//             // function (d) {
//             //     return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value }
//             // },

      

//             // Now I can use this dataset:
//             function (data) {

//                 const DUMMY_DATA = [
//                     { id: 'd1', region: "USA", value: 10 },
//                     { id: 'd2', region: "Can", value: 2 },
//                     { id: 'd3', region: "Eur", value: 6 },
//                     { id: 'd4', region: "mex", value: 10 }
//                 ]

//                 // Add X axis --> it is a date format
//                 const x = d3.scaleTime()
//                     .domain(d3.range(DUMMY_DATA.length))
//                     .range([0, width]);
//                 svg.append("g")
//                     .attr("transform", "translate(0," + height + ")")
//                     .call(d3.axisBottom(x));

//                 // Add Y axis
//                 const y = d3.scaleLinear()
//                     .domain(d3.range(10))
//                     .range([height, 0]);
//                 svg.append("g")
//                     .call(d3.axisLeft(y));

//                 // Add the line
//                 svg.append("path")
//                     .datum(data)
//                     .attr("fill", "none")
//                     .attr("stroke", "steelblue")
//                     .attr("stroke-width", 1.5)
//                     .attr("d", d3.line()
//                         .x(function (d) { return x(d.date) })
//                         .y(function (d) { return y(d.value) })
//                     )

//             })
//     }
// }

// export default lineGraph;