/** @format */

const fs = require('fs')
const {
  matchTimes,
  secondsToTextTime,
  textTimeToSeconds,
} = require('./lib/time')

const arguments = process.argv.slice(2)
const shiftSeconds = textTimeToSeconds(arguments.pop())
const inputFilePath = arguments.pop() ?? '/tmp/test.srt'
const outputFilePath = arguments.pop() ?? '/tmp/test2.srt'

const processLine = (line) => {
  const matches = matchTimes(line)
  const times = []
  for (const match of matches) {
    times.push(secondsToTextTime(textTimeToSeconds(match[0]) + shiftSeconds))
  }
  return times.length > 0 ? times.join(' --> ') : line
}

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const newData = data.split('\n').map(processLine).join('\n')

  fs.writeFile(outputFilePath, newData, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
  })
})
