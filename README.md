# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @olanrewaju-ak/lotide`

**Require it:**

`const _ = require('@olanrewaju-ak/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: function head returns the end of any array passed into it.
- `tail(array)`: function tail returns the tail of any array passed into it.
- `middle(array)`: function middle returns an array of themiddle item(s),of any array passed into it.
- `assertEqual(actual,expected)`: the function compare the two values it takes in and print out a message telling us if they match or not.
- `eqArrays(array1,array2)`: function eqArrays takes in two arrays and returns true or false, based on a perfect match.
- `assertArraysEqual(array1,array2)`: function for asserting that two arrays are equal.
- `without(array,[values to remove])`: function without will return a subset of a given array, removing unwanted elements
- `flatten(array)`: is a function which does something like this. Given an array with other arrays inside, it can flatten it into a single-level array.This function can only handle one level of nesting.
- `countOnly(array, itemsToCount)`: will be given an array and an object. It will return an object containing counts of everything that the input object listed.
- `countLetters(string)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `letterPositions(string)`: will return all the indices (zero-based positions) in the string where each character is found.
- `findKeyByValue(object,value)`: which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
- `eqObjects(object1,object2)`: takes in two objects and returns true or false, based on a perfect match.
- `assertObjectsEqual(actual,expected)`: which will take in two objects and console.log an appropriate message to the console.
- `map(array,callback)`:The map function will return a new array based on the results of the callback function.
- `takeUntil(array,callback)`:The function will keep collecting items from a provided array until the callback provided returns a truthy value.
- `findkey(array,callback)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
