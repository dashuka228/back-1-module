import helloFromSubmodule from './front-sub/submodule.js';
	
function helloFromBack1() {
	console.log('hello from back1');
	helloFromSubmodule();
}

helloFromBack1();
