module.exports = function (classesObj, classes) {
  var keys = Object.keys(classesObj);
  var i = keys.length;

  for (; i--;) {
    if (classesObj[keys[i]]) classes = (classes ? classes + ' ' : '') + keys[i]
  }

  return classes;
};
