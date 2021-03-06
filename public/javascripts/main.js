require.config({
  baseUrl: "//slide.dev/javascripts"
  //baseUrl: "//https://axcoto.com/qslider/javascripts/"

  // Libraries
    ,paths: {
  jquery: 'jquery.min',
  bootstrap: 'bootstrap.min',
  'underscore': 'underscore-min',
  'backbone': 'backbone-min',
  buzz: 'buzz',
  parse: 'parse-1.2.0.min',
  'localStorage': 'backbone.localStorage-min',
  firebase: 'firebase'
    }

    ,shim: {
  '*': { 'jquery': 'jquery-private' },
  'jquery-private': { 'jquery': 'jquery' },

  "jquery": {
    "exports": "$j"
  },

  "underscore": {
    "exports": "_"
  },

  "backbone": {
    // Depends on underscore/lodash and jQuery
    "deps": ["underscore", "jquery"],
    // "deps": ["underscore", "jquery"],

    // Exports the global window.Backbone object
    "exports": "Backbone"
  },

  "firebase": {
    "exports": "Firebase"  
  },

  "localStorage" : {
    // Depends on underscore/lodash and jQuery
    "deps": ["backbone"]
  },

  'transform': {
    deps: [
      // 'jquery'
    ]
    //,"exports": "transform"
  },

  'buzz': {
    exports: 'buzz'
  }

        ,worker: {
      exports : 'worker'
        },

        'parse': {
          exports: 'Parse'
        }
    }
})

require(['app'], function (app) {
  app.init();
})
