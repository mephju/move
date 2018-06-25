
const toVisData = (cluster) => {
  const {centroid, points} = cluster

  return {
    x: centroid[0],
    y: centroid[1],
    size: points.length + 1,
  }
}

const getCentroids = clusters => clusters.map(toVisData)
const getPoints = clusters => {
  return clusters.reduce(
    (acc, cluster) => [...acc, ...cluster.points.map(
      point => ({
        x: point[0],
        y: point[1],
        size: 1,
        label: point.label,
        rotation: 45,
        style: {color: '#999'}
      })
    )], []
  )
}

export default {
  getCentroids,
  getPoints,
}