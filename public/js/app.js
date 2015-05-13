(function (d3) {

	var data = [
		{
			type: "A",
			count: 1
		},
		{
			type: "B",
			count: 2
		},
		{
			type: "C",
			count: 3
		},
		{
			type: "D",
			count: 4
		},
		{
			type: "E",
			count: 5
		}
	];

	var margin = {
		left: 30,
		right: 30,
		top: 30,
		bottom: 30
	}

	var width = 500 - (margin.left + margin.right);
	var height = 500 - (margin.top + margin.bottom);

	var svg = d3.select("svg")
				.attr({
					"width": 500,
					"height": 500
				})
				// .style({
				// 	"background-color": "grey"
				// })
				.append("g")
				.attr({
					"transform": "translate("+ [margin.left, margin.right] +")"
				});

	var types = data.map(function (d) { return d.type;});
	var xScale = d3.scale.ordinal()
					.domain(types)
					.rangeBands([0, width]);
					// .rangeBands([0, width], 0.1);

	var yScale = d3.scale.linear()
					.domain([0, d3.max(data, function (d) { return d.count})])
					.range([height, 0]);

	var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient("bottom");

	var yAxis = d3.svg.axis()
					.scale(yScale)
					.orient("left");

	svg.append("g")
		.call(xAxis)
		.attr({
			"transform": "translate("+ [0, height] +")"
		});

	svg.append("g")
		.call(yAxis);

	svg.selectAll("rect")
		.data(data)
		.enter()
		.append("rect")
		.attr({
			"x": function (d) {
				return xScale(d.type)
			},
			"width": function (d) {
				return xScale.rangeBand();
			},
			"y": function (d) {
				return yScale(d.count);
			},
			"height": function (d) {
				return height - yScale(d.count);
			},
			"fill": function (d) {
				return d3.rgb(Math.random()*255, Math.random()*255, Math.random()*255);
			}
		})
})(d3);