'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var abs = require( 'math-abs' );
var EPS = require( 'const-eps-float64' );
var PI = require( 'const-pi' );
var PI_SQUARED = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof PI_SQUARED, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 9.869604401089358', function test( t ) {
	t.equal( PI_SQUARED, 9.869604401089358, 'equals 9.869604401089358' );
	t.end();
});

tape( 'export equals π²', function test( t ) {
	var delta;
	var tol;
	var v;

	v = pow( PI, 2 );

	delta = abs( PI_SQUARED - v );
	tol = EPS * v;

	t.ok( delta <= tol, 'equals π² within tolerance '+tol+'. v: '+v+'. π²: '+PI_SQUARED+'.' );
	t.end();
});
