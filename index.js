module.exports = function (classesObj) {
  var i, classes = ''

  for (i in classesObj) {
    if (classesObj[i]) classes += (classes && ' ') + i
  }

  return classes
}
