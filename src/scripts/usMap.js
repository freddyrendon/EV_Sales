
class Usmap {
    constructor(){
        this.drawUsmap();
    }

    drawUsmap(){
        const width = 710;
        const height = 600;
        const svg = d3.select("#USmap")
            .append("svg")
            .attr("width", width)
            .attr("height",height);

        const projection = d3.geoAlbersUsa()
            .translate([width / 2, height / 2]) // translate to center of screen
            .scale([1000]); // scale things down so see entire US

        const path = d3.geoPath().projection(projection);
        d3.json("https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json", function (error, uState) {
            if (error) throw error;

            svg.selectAll('path')
                .data(uState.features)
                .enter()
                .append('path')
                .attr("d", path)
                .attr('class','state')

                .text(svg.selectAll('.state')._groups[0]
                .forEach(element => {
                    element.addEventListener('mouseover', function (e){
                        var rect = e.target.getBoundingClientRect();
                        var x = e.clientX - rect.left; //x position within the element.
                        var y = e.clientY - rect.top;  //y position within the element.

                        d3.select("#tooltip")
                            .style("left", x + "px")
                            .style("top", y + "px")
                            .style("display", "block")
                            .html("State Name: " + element.__data__.properties.name)
                            // .html("Auto Manufactour: Tesla");


                        console.log(element.__data__.properties.name)
                    })
                    
                }))

                
            });
        // d3.json("https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json", function (error, uState) {
        //     if (error) throw error;

        //     svg.selectAll('path')
        //         .data(uState.features)
        //         .enter()
        //         .append('path')
        //         .attr("d", path)
        //         .attr('class', 'state');

        //     svg.selectAll("text")
        //         .data(uState.features)
        //         .enter()
        //         .append("text")
        //         .attr("x", function (d) { return path.centroid(d)[0]; })
        //         .attr("y", function (d) { return path.centroid(d)[1]; })
        //         .text(function (d) { return d.properties.name; })
        //         .style("text-anchor", "middle")
        //         .style("font-size", "10px")
        //         .style("fill", "black");
        // });

//     d3.json("https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json", function (error, uState) {
//     if (error) throw error;

//   svg.selectAll('path')
//     .data(uState.features)
//     .enter()
//     .append('path')
//     .attr("d", path)
//     .attr('class','state')
//     .on("mouseover", function(d) {
//       d3.select("#state-name-" + d.id)
//         .style("display", "block");
//     })
//     .on("mouseout", function(d) {
//       d3.select("#state-name-" + d.id)
//         .style("display", "none");
//     });

//   svg.selectAll("text")
//     .data(uState.features)
//     .enter()
//     .append("text")
//     .attr("x", function(d) { return path.centroid(d)[0]; })
//     .attr("y", function(d) { return path.centroid(d)[1]; })
//     .text(function(d) { return d.properties.name ; })
//     .style("text-anchor", "middle")
//     .style("font-size", "10px")
//     .style("fill", "black")
//     .style("display", "none")
//     .attr("id", function(d) { return "state-name-" + d.id; });
// });



            
    }
}

export default Usmap;