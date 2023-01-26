
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
            .attr("height", height);

        const projection = d3.geoAlbersUsa()
            .translate([width / 2, height / 2]) // translate to center of screen
            .scale([1000]); // scale things down so see entire US

        const path = d3.geoPath().projection(projection);
        // debugger
        d3.json("https://gist.githubusercontent.com/Bradleykingz/3aa5206b6819a3c38b5d73cb814ed470/raw/a476b9098ba0244718b496697c5b350460d32f99/us-states.json", function (error, uState) {
            if (error) throw error;

            svg.selectAll('path')
                .data(uState.features)
                // .data(uState.properties.name)
                .enter()
                .append('path')
                .attr("d", path)
                .attr('class','state')
                // .attr('state', uState.features[0].properties.name)
                // .text(function() {
                //     return d
                // })
                // debugger


                
                debugger
                svg.selectAll('.state')._groups[0]
                .forEach(element => {
                    element.addEventListener('mouseover', function (){
                        // return element.__data__.properties.name
                        console.log(element.__data__.properties.name)
                        // const barGraph = new Bargraph(element.__data__.properties.name)
                    })
                    
                });
                debugger
                
            });

            
    }
}

export default Usmap;