//define svgwidth and svgheight 
var svgWidth = 960;
var svgHeight = 500;

//set margins
var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

//set widht and height
var widht = svgWidth - margin.left - margin.right;
var height = svgHeight -margin.top - margin.bottom;

//Create an SVG wrapper, append an SVG group that will hold our chart,
//and shift the latter by left and top margins.
var svg = d3
    .select("#scatter")
    .append(svg)
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Append an SVG group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)

//Initial Params
var chosenXAxis = "poverty"
var chosenYAxis = "healthcare"

//function used for updating x-scale var upon click on axis label
function xScale(data, chosenXAxis) {
    var xLinearScale = d3.scaleLinear()
    .domain([d3.min(data, d => d[chosenXAxis]) * 0.8,
        d3.max(data, d => d[chosenXAxis]) * 1.2
        ]) 
      .range([0, width]);
    
    return xLinearScale;
}

//function used for updating y-scale var upon click on axis label
function yScale(data, chosenYAxis) {
    var yLinearScale = d3.scaleLinear()
    .domain([d3.min(data, d => d[chosenYAxis]) * 0.8,
        d3.max(data => d[chosenYAxis]) * 1.2
        ])
       .range([height, 0]);
    return yLinearScale;
}

//function used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);
    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);

    return xAxis;    
}

//function used for updating yAxis var upon click on axis label
function renderAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newyScale);
    yAxis.transition()
        .duration(1000)
        .call(leftAxis);

    return yAxis;
}

//function used for updating circles group with a transition to
//new circles for x
function renderXCircles(circlesGroup, newXScale, chosenXAxis) {
    circlesGroup.transition()
        .duration(1000)
        .attr("cx", d => newXScale(d[chosenXAxis]))
        .attr("dx", d => newXScale(d[chosenXAxis]));

    return circlesGroup;    
}

//new circles for y
function renderYCircles(circlesGroup, newYScale, chosenYAxis) {
    circlesGroup.transition()
        .duration(1000)
        .attr("cy", d => newYScale(d[chosenYAxis]))
        .attr("dy", d => newYScale(d[chosenYAxis])+5)

    return circlesGroup;    
}

//updating text location X
function renderXText(circlesGroup, newXScale, chosenXAxis) {
    circlesGroup.transition()
        .duration(1000)
        .attr("cx", d => newXScale(d[chosenXAxis]));

    return circlesGroup;
}

//updating text location Y
function renderYText(circlesGroup, newYScale, chosenYAxis) {
    circlesGroup.transition()
        .duration(1000)
        .attr("dy", d => newYScale(d[chosenYAxis]));

    return circlesGroup;
}

//function used for updating circles group with new tooltip
function updateToolTip(chosenXAxis, chosenYAxis, circlesGroup) {
    var xlabel;
    var ylabel;










}











    
    




