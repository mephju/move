import kMeans from 'clusters'
import groupedByDate from './groupedByDate'

const getClusters = (k) => {

  const clusteredByDate = Object.entries(groupedByDate).map(([date, group]) => {
    const points = group.map(item => item.point)
    kMeans.data(points)
    const clusters = kMeans.clusters()

    return { date, clusters }
  })

  return clusteredByDate
}

export default getClusters