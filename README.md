# everest-data

[![CircleCI](https://circleci.com/gh/jebeck/everest-data.svg?style=svg)](https://circleci.com/gh/jebeck/everest-data)

Wikipedia's [list of people who died climbing Mount Everest](https://en.wikipedia.org/wiki/List_of_people_who_died_climbing_Mount_Everest 'Wikipedia: List of people who died climbing Mount Everest') as JSON data.

Wikipedia has made the text of the data distributed here in JSON format available under a [Creative Commons Attribution-ShareAlike License, 3rd version](https://creativecommons.org/licenses/by-sa/3.0/legalcode 'Creative Commons CC-BY-SA 3.0').

## how to use

If you'd like to use this data in a JavaScript project, simply install it as a dependency via [npm](https://www.npmjs.com/ 'npm'):

```bash
$ npm install --save everest-data
```

To access the data as an array of JavaScript objects, simply require the package as you would any other dependency installed via npm:

```JavaScript
var data = require('everest-data');
```

For use outside of JavaScript projects, you can [download the package from GitHub](https://github.com/jebeck/everest-data/releases/latest).
