import moment from "moment"

const round = value => Math.round(value * 100) / 100

const formatDate = (date, format = "MMMM Do YYYY") => {
  return moment(date).format(format)
}

const getRandom = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max + 1)

  return Math.floor(Math.random() * (max - min)) + min
}

export { round, formatDate, getRandom }
