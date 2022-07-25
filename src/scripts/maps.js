// class Example {
//     constructor(ele){
//         this.ele = ele; 
//         this.ele.innerHTML = "<h1> It's Alive!!!</h1>";
//         this.handleClick = this.handleClick.bind(this)
//         this.ele.addEventListener('click', this.handleClick);
//     }

//     handleClick() {
//         this.ele.children[0].innerText = "Ouch";
//     }


// }

class Map {
    constructor(){
        this.drawMap();
    }

    drawMap (){
        const svg = d3.select("svg"),
            width = +svg.attr("width"),
            height = +svg.attr("height");


        const projection = d3.geoPatterson()
            .scale(160)
            .translate([width / 2, height / 1.6])
            .precision(0.1);

        const path = d3.geoPath()
            .projection(projection);

        // svg.append("path")
        //     .datum(d3.geoGraticule10())
        //     .attr("class", "graticule")
        //     .attr("d", path);

        d3.json("https://d3js.org/world-50m.v1.json", function (error, world) {
            if (error) throw error;

            svg.insert("path", ".graticule")
                .datum(topojson.feature(world, world.objects.land))
                .attr("class", "land")
                .attr("d", path);

            svg.insert("path", ".graticule")
                .datum(topojson.mesh(world, world.objects.countries, function (a, b) { return a !== b; }))
                .attr("class", "boundary")
                .attr("d", path);
        });

    }
}


// const svg = d3.select("svg"),
//     width = +svg.attr("width"),
//     height = +svg.attr("height");

// const projection = d3
//     .geoMercator()
//     .center([0,20]) // youtube video code 
//     .scale(99)
//     .translate([width / 2, height / 2])
//     // .precision(0.1); youtube video code 

//     d3.queue()
//     .defer(
//         d3.json, 
//         "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
//     ) // world shape 
//     .defer(
//         d3.csv, 
//         "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_gpsLocSurfer.csv"
//     ) /// position of circles 
//     .await(ready);

//     function ready(error, dataGeo, circleData){
//         /// draw the map 
//         console.log('geography data', dataGeo, "circle data", circleData);

//     }

// const path = d3.geoPath()
//     .projection(projection);

// svg.append("path")
//     .datum(d3.geoGraticule10())
//     .attr("class", "graticule")
//     .attr("d", path);

// d3.json("https://d3js.org/world-50m.v1.json", function (error, world) {
//     if (error) throw error;

//     svg.insert("path", ".graticule")
//         .datum(topojson.feature(world, world.objects.land))
//         .attr("class", "land")
//         .attr("d", path);

//     svg.insert("path", ".graticule")
//         .datum(topojson.mesh(world, world.objects.countries, function (a, b) { return a !== b; }))
//         .attr("class", "boundary")
//         .attr("d", path);
// });

export default Map;