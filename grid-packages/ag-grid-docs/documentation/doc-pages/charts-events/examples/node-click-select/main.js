var options = {
    container: document.getElementById('myChart'),
    title: {
        text: 'Number of Cars Sold'
    },
    subtitle: {
        text: '(click a marker to toggle its selected state)'
    },
    data: [
        { month: 'March', units: 25, brands: { BMW: 10, Toyota: 15 } },
        { month: 'April', units: 27, brands: { Ford: 17, BMW: 10 } },
        { month: 'May', units: 42, brands: { Nissan: 20, Toyota: 22 } }
    ],
    series: [{
        type: 'line',
        xKey: 'month',
        yKey: 'units',
        listeners: {
            nodeClick: function (event) {
                event.datum.selected = !event.datum.selected;
            }
        },
        marker: {
            size: 16,
            formatter: function (params) {
                // Use a different size and color for selected nodes.
                if (params.datum.selected) {
                    return {
                        fill: 'red',
                        size: 24
                    };
                }
            }
        }
    }],
    axes: [{
        type: 'category',
        position: 'bottom'
    }, {
        type: 'number',
        position: 'left'
    }],
    legend: {
        enabled: false
    }
};

var chart = agCharts.AgChart.create(options);

function listUnitsSoldByBrand(brands) {
    var result = '';
    for (var key in brands) {
        result += key + ': ' + brands[key] + '\n';
    }
    return result;
}