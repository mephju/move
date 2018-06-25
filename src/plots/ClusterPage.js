import React, {Component} from 'react'
import data from '../data/data'
import toVisData from './toVisData'
import DateList from './DateList'



import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  LabelSeries
} from 'react-vis'

class ClusterPage extends Component {

  constructor(props) {
    super(props)
    const k = 10
    const [group] = data
    this.state = {
      k,
      ...group,
    }

    this.switchDate = this.switchDate.bind(this)
  }

  switchDate(date) {
    const group = data.find(group => group.date === date)

    this.setState({
      ...group
    })
  }

  render() {
    const dates = data.map(c => c.date)
    const markSeries1 = toVisData.getCentroids(this.state.clusters)
    const markSeries2 = toVisData.getPoints(this.state.clusters)

    console.log('state', this.state)
    console.log('markSeries1', markSeries1)
    console.log('markSeries2', markSeries2)

    return <div>

      <h1> Clusters {this.state.date}</h1>

      <DateList dates={dates} onClick={this.switchDate} />

      <XYPlot width={window.innerWidth - 20} height={600}>

        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />

        <MarkSeries
          className="mark-series-example"
          strokeWidth={1}
          opacity="0.8"
          sizeRange={[1, 20]}
          data={markSeries1}
        />

        <LabelSeries
          allowOffsetToBeReversed
          data={markSeries2}
          strokeWidth={0.05}
          opacity="0.5"
          sizeRange={[1]}
        />

      </XYPlot>

    </div>
  }

}

export default ClusterPage