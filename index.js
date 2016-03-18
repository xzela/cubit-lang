
var C = {
	0: [0,0,0,0],
	1: [0,0,0,1],
	2: [0,0,1,0],
	3: [0,0,1,1],
	4: [0,1,0,0],
	5: [0,1,0,1],
	6: [0,1,1,0],
	7: [0,1,1,1],
	8: [1,0,0,0],
	9: [1,0,0,1],
	a: [1,0,1,0],
	b: [1,0,1,1],
	c: [1,1,0,0],
	d: [1,1,0,1],
	e: [1,1,1,0],
	f: [1,1,1,1]
};

function generateCharacter() {
	var v = [];
	for (var i = 0; i < 4; i++) {
		v.push(Math.floor(Math.random() * (1 - 0 + 1)) + 0);
	}
	return v;
}

var string = "hello world!";

function transmuteString(string) {
	var chars = string.split('');
	var block = [];
	chars.map(function (c) {
		block.push(c.charCodeAt(0).toString(16).split('').map(function (o) {
			return C[o];
		}));
	});
	return block;
}


function printBlock(section) {

	for (var i = 0; i < section.length; i++) {
		block = section[i];
		console.log("----");
		console.log(block[3], block[2]);
		console.log(block[1], block[0]);

	}
}
var blocks = transmuteString(string);
for (var i = 0; i < blocks.length; i++) {
	printBlock(blocks[i]);
}

// var u = 'A'.charCodeAt(0).toString(16);
// u.split('').map(function (i) { console.log(c[i]);});
// console.log(c[u]);
// writeToDom(list);
