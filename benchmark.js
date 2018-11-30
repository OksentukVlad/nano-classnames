#!/usr/bin/env node
var benchmark = require('benchmark');
var classnames = require('classnames');
var classnamesMinimal = require('classnames-minimal');
var classcat = require('classcat');

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
  .add('small object: classnames', function () {
    classnames(testClassObject1);
  })
  .add('small object: classnames-minimal', function () {
    classnamesMinimal(testClassObject1);
  })
  .add('small object: classcat', function () {
    classcat(testClassObject1);
  })
  .add('small object: nano-classnames', function () {
    nanoClassnames(testClassObject1);
  })
  .add('big object: classnames', function () {
    classnames(testClassObject2);
  })
  .add('big object: classnames-minimal', function () {
    classnamesMinimal(testClassObject2);
  })
  .add('big object: classcat', function () {
    classcat(testClassObject2);
  })
  .add('big object: nano-classnames', function () {
    nanoClassnames(testClassObject2);
  })
  .on('cycle', function (event) {
    console.log(event.target.toString());
  })
  .run();
