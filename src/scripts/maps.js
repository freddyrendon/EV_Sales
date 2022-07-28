
// class Map {
//     constructor(){
//         this.drawMap();
//     }

//     drawMap (){
//         const svg = d3.select("svg"),
//             width = +svg.attr("width"),
//             height = +svg.attr("height");


//         const projection = d3.geoPatterson()
//             .scale(160)
//             .translate([width / 2, height / 1.6])
//             .precision(0.1);

//         const path = d3.geoPath()
//             .projection(projection);

//             const stateIdMap = d3.map({

//             });

//         d3.json("https://d3js.org/world-50m.v1.json", function (error, world) {
//             if (error) throw error;

//             svg.insert("path", ".graticule")
//                 .datum(topojson.feature(world, world.objects.land))
//                 .attr("class", "land")
//                 .attr("d", path);

//             svg.insert("path", ".graticule")
//                 .datum(topojson.mesh(world, world.objects.countries, function (a, b) { return a !== b; }))
//                 .attr("class", "boundary")
//                 .attr("d", path);
//         });
        
//         // const width = 900;
//         // const height = 600;

//         // const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

//         // const projection = d3.geoMercator().scale(140)
//         //     .translate([width / 2, height / 1.4]);
//         // const path = d3.geoPath(projection);

//         // const g = svg.append('g');

//         // d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
//         //     .then(data => {

//         //         const countries = topojson.feature(data, data.objects.countries);
//         //         g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path)
//         //     }
//     }
// }


// export default Map;