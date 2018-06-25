import raw from './data.json'
import kMeans from 'clusters'

kMeans.k(10)
kMeans.iterations(1000)

const refined = raw.map(item => {
  const i = {
    date: item.date,
    x: item.x,
    y: item.y,
    label: item.label,
    point: [item.x, item.y]
  }
  i.point.label = item.label
  return i
})

const groupedByDate = refined.reduce((acc, item) => {

  const group = acc[item.date] = acc[item.date] || []

  group.push(item)

  return acc
}, {})

const clusteredByDate = Object.entries(groupedByDate).map(([date, group]) => {
  const points = group.map(item => item.point)
  kMeans.data(points)
  const clusters = kMeans.clusters()

  return { date, clusters }
})

console.log('clusteredByDate', clusteredByDate)

export default clusteredByDate