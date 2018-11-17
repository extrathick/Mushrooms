import React from 'react';
import lookup from '../lib/csvValueLookup';
import ReactEcharts from 'echarts-for-react';


class GenericClusteredBarChart extends React.Component {

    constructor(props) {
        super(props);
        this.category = this.props.category;
        this.title = this.props.title;
        this.colors = this.props.colors;
        this.look = new lookup();
        this.state = {
            option: null,
            data: null,
        }
        this.state.data = this.compileData(this.category, this.colors);
        this.state.option = this.getOption(this.title, this.state.data, this.category);
    }

    getOption(title, data, category) {
        let header = this.look.getData(category);
        let option = {
            title: {
                text: 'placeholder',
                textStyle: { color: "white" },
                x: 'center',
                y: 'top'
            },
            xAxis: {
                type: 'category',
                data: [],
                axisLabel: {
                    textStyle: { color: "white" }
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [],
            tooltip: {},
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            }
        };

        option.title.text = title;
        header[0].forEach((name, index) => {
            option.xAxis.data.push(name);
        });
        option.series.push({ data, type: 'bar' });
        // option.series[0].name = header[0];
        return option;
    }

    compileData(category, colors) {
        let data = this.look.getData(category);
        let series = [];
        data[1].forEach((count, index) => {
            if (colors.length > 0 && colors.length >= data[1].length) {
                series.push({
                    value: count,
                    itemStyle: { color: colors[index] }
                });
            }

        });

        return series;
    }


    render() {
        console.log(this.state.option);
        return (
            <ReactEcharts
                option={this.state.option}
                style={{ height: '500px', width: '100%' }}
            />



        )
    }
}

export default GenericClusteredBarChart;