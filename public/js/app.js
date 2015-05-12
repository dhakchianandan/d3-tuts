(function(d3) {
	console.log("Inside IIFE");

	var data = [23,45,12,76,46,90,11];

	var data = [
		{
			time: 0,
			registration: 23
		},
		{
			time: 1,
			registration: 45
		},
		{
			time: 2,
			registration: 12
		},
		{
			time: 3,
			registration: 76
		},
		{
			time: 4,
			registration: 46
		},
		{
			time: 5,
			registration: 90
		},
		{
			time: 6,
			registration: 11
		},
		{
			time: 7,
			registration: 23
		},
		{
			time: 8,
			registration: 45
		},
		{
			time: 9,
			registration: 12
		},
		{
			time: 10,
			registration: 76
		},
		{
			time: 11,
			registration: 46
		},
		{
			time: 12,
			registration: 90
		},
		{
			time: 13,
			registration: 11
		},
		{
			time: 14,
			registration: 23
		},
		{
			time: 15,
			registration: 45
		},
		{
			time: 16,
			registration: 12
		},
		{
			time: 17,
			registration: 76
		},
		{
			time: 18,
			registration: 46
		},
		{
			time: 19,
			registration: 90
		},
		{
			time: 20,
			registration: 11
		},
		{
			time: 21,
			registration: 23
		},
		{
			time: 22,
			registration: 45
		},
		{
			time: 23,
			registration: 12
		}
	];

	var margin = {
		top: 30,
		bottom: 30,
		left: 30,
		right: 30
	}

	var width = 500 - (margin.left + margin.right);
	var height = 500 - (margin.top + margin.bottom);

	var svg = d3.select("svg")
				.attr({
					width: width + margin.left + margin.right,
					height: height + margin.right + margin.left
				});

	svg.append("g")
		.attr("transform", "translate("+ [margin.left, margin.top] +")")

	var xScale = d3.scale.linear()
					.domain([0, d3.max(data, function (d) {
						return d.time
					})])
					.range([0, width]);

	var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient("bottom");


	var yScale = d3.scale.linear()
					.domain([0, d3.max(data, function (d) {
						return d.registration
					})])
					.range([height, 0]);

	var yAxis = d3.svg.axis()
					.scale(yScale)
					.orient("left");

	svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate("+ [margin.left, margin.top] +")")
		.call(yAxis);


	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate("+ [margin.left, height + margin.bottom] +")")
		.call(xAxis);

	svg.selectAll("rect")
		.data(data)
		.enter()
		.append("rect")
		.attr({
			height: function (d) {
				return height - yScale(d.registration);
			},
			y: function (d) {
				return yScale(d.registration) + margin.top;
			},
			width: function (d) {
				return width/data.length;
			},
			x: function (d, i) {
				return xScale(d.time) + margin.left;
			}
		})

})(d3);