var vis1 = "js/global_air_pollution.vg.json";
var vis2 = "js/mismanaged_plastic_waste.vg.json"

vegaEmbed("#vis1", vis1).then(function(result) {}).catch(console.error);
vegaEmbed("#vis2", vis2).then(function(result) {}).catch(console.error);