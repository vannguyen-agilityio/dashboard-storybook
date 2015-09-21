/*
var s,
NewsWidget = {

  settings: {
    numArticles: 5,
    articleList: $("#article-list"),
    moreButton: $("#more-button")
  },

  init: function() {
    // kick things off
    s = this.settings;
    console.log('ssssss',s);
  }

  // bindUIActions: function() {
  //   s.moreButton.on("click", function() {
  //     NewsWidget.getMoreArticles(s.numArticles);
  //   });
  // },

  // getMoreArticles: function(numToGet) {
  //   // $.ajax or something
  //   // using numToGet as param
  // }

};

NewsWidget.init();

*/

var NewsWidget = function() {
  $(this).setting = {};
}

NewsWidget.prototype = {
  init: function() {
    console.log('init');
  },

  bindUIActions: function() {
    console.log('bindUIActions');
  }
}

//Usage
var nw = new NewsWidget();
nw.init();
nw.bindUIActions();


/**
 * @name someFunction
 * @author
 *
 * Basic usage:
 * someFunction();
 *
 * additionally you can use methods like someFunction.methodName();
 *
 * Advanced usage:
 * someFunction({
 *      "additionalOption": "thatCanOvervriteDefaults"
 * });
 */
function someFunction(opts) {
    //assign _root and config private variables
    var _root = this;
    var _cfg = $.extend({
        "someOption":       "some value"
    }, opts);

    /*
        INITIALIZE
    */
    this.init = function(opts) {
        //some code
        console.log('init function');
        // _somePrivateMethod();
        // _root.somePublicMethod();
        _cfg = $.extend(_cfg, opts);

    }
    /*
        Some Private Method (no "this")
    */
    _somePrivateMethod = function() {
        //some code
        console.log("_somePrivateMethod");
    }
    /*
        Some Public Method
    */
    this.somePublicMethod = function() {
        //some code
        console.log("somePublicMethod");
    }
    /*********************
     *   AUTO INITIALIZE
     **********************/
     this.init();
}

//declaration and initialization of someFunction
//someFunction();

//someFunction._somePrivateMethod();
//returns: TypeError: someFunction._somePrivateMethod is not a function

var someFunction = new someFunction();


// someFunction.init();
//returns: "somePublicMethod"