module.exports = function (classesObj) {
  var keys = Object.keys(classesObj);
  var i = keys.length;
  var classes = '';

  for (; i--;) {
    if (classesObj[keys[i]]) classes += (classes ? ' ' : '') + keys[i]
  }

  return classes;
};
