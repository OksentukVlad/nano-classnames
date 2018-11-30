#!/usr/bin/env node
var benchmark = require('benchmark');
var classnames = require('classnames');
var classnamesMinimal = require('classnames-minimal');

var nanoClassnames = require('.');

var suite = new benchmark.Suite();

var testClassObject1 = {
  'class1': true,
  'class2': true,
  'class3': true,
  'class4': false,
  'class5': false,
  'class6': false,
};

var testClassObject2 = Array(10000).fill().reduce((acc, _, i) => Object.assign(acc, { ['class' + i]: i % 2 === 0 }), {});

suite
  .add('nano-classnames', function () {
    nanoClassnames(testClassObject1);
  })
  .add('classnames-minimal', function () {
    classnamesMinimal(testClassObject1);
  })
  .add('classnames', function () {
    classnames(testClassObject1);
  })
  // .add('nano-classnames:HUGE', function () {
  //   nanoClassnames('', testClassObject2);
  // })
  // .add('classnames-minimal:HUGE', function () {
  //   classnamesMinimal(testClassObject2);
  // })
  // .add('classnames:HUGE', function () {
  //   classnames(testClassObject2);
  // })
  .on('cycle', function (event) {
    console.log(event.target.toString());
  })
  .run();
