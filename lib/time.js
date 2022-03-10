/** @format */

exports.textTimeToSeconds = (text) => {
  if (!text) return 0
  let symbol = ''
  let rawText = text
  if (text[0] === '-') {
    symbol = '-'
    rawText = text.split('').slice(1).join('')
  }
  const [secondsPart, decimalsPart] = rawText.split(',')
  const splittedSeconds = secondsPart.split(':')
  let totalSeconds = 0
  let deep = 0
  while (splittedSeconds.length > 0) {
    totalSeconds += splittedSeconds.pop() * 60 ** deep++
  }

  return parseFloat(symbol + totalSeconds + '.' + decimalsPart)
}

exports.secondsToTextTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const textHours = Math.floor(minutes / 60)
  const textMinutes = minutes % 60

  const miliseconds = Math.round((seconds - minutes * 60) * 1000)
  const textSeconds = Math.floor(miliseconds / 1000)
  const textMiliseconds = miliseconds % 1000

  return (
    textHours.toString().padStart(2, '0') +
    ':' +
    textMinutes.toString().padStart(2, '0') +
    ':' +
    textSeconds.toString().padStart(2, '0') +
    ',' +
    textMiliseconds.toString().padStart(3, '0')
  )
}

exports.matchTimes = (line) => line.matchAll(/\d{2}:\d{2}:\d{2},\d{3}/g)
