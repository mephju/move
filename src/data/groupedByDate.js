import raw from './data.json'

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

export default groupedByDate