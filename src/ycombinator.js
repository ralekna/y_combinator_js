/**
 * Created by rytis on 2015-04-29.
 */
var yCombinator = function(RecursiveFunctionFactory) {
  return (
    function(f1) {
      return f1(f1);
    }
  )(function( f2 ) {
    return RecursiveFunctionFactory(
      function(ArgumentThatWillBePassedProducedFunction) {
        return ( f2(f2) )(ArgumentThatWillBePassedProducedFunction);
      }
    );
  });
};


var RecursiveFunctionFactory = function(ReferenceToProducedFunction) {
  return function(n) {
    if( n < 2 ) { // a condition to stop recursion
      // return some value that will interact with memo
      return 1;

    } else {
      // return memo
      // you can override memo with new value or combine it with a new value
      return n * ReferenceToProducedFunction( n - 1 /* Change `n` somehow */);

    }
  }
};


var ProducedRecursiveFunction = yCombinator(RecursiveFunctionFactory);

var ResultOfRecursiveFunction = ProducedRecursiveFunction(5);
