// You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

// The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

// Write a function:

// function solution(H);

// that, given an array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.

// For example, given array H containing N = 9 integers:

//   H[0] = 8    H[1] = 8    H[2] = 5
//   H[3] = 7    H[4] = 9    H[5] = 8
//   H[6] = 7    H[7] = 4    H[8] = 8
// the function should return 7. The figure shows one possible arrangement of seven blocks.



// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array H is an integer within the range [1..1,000,000,000].
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(H) {
	// write your code in JavaScript (Node.js 8.9.4)
	const stack = [];
	let bricks = 0;

	for (let i = 0; i < H.length; i++) {
		while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
			stack.pop();
		}

		if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
			stack.push(H[i]);
			bricks++;
		}
	}
	return bricks;
}

function solution(H) {
	// write your code in JavaScript (Node.js 4.0.0)

	let counter = 0;
	let height = 0;
	let blocks = [];
	let i = 0;

	while (i < H.length) {
		if (H[i] > height) {
			let newBlock = H[i] - height;
			blocks.push(newBlock);
			height += newBlock;
			counter++;
			i++;
		}
		else if ( H[ i ] < height ) {
			let lastBlock = blocks.pop();
			height -= lastBlock;
		}
		else
			i++;
	}
	return counter;
}

function solution(H) {
	var blocks = 1;
	var previousWall = [H[0]];
	var previousHeight = H[0];
	for (var i = 1; i < H.length; i++) {
		var currentHeight = H[i];
		var heightDiff = currentHeight - previousHeight;
		if (heightDiff > 0) {
			//current wall heighter
			blocks++;
			previousHeight += heightDiff;
			previousWall.push(heightDiff);
		} else {
			while (previousHeight > currentHeight) {
				var lastBlock = previousWall.pop();
				previousHeight -= lastBlock;
			}
			heightDiff = currentHeight - previousHeight;
			if (heightDiff > 0) {
				//current wall is highter
				blocks++;
				previousWall.push(heightDiff);
				previousHeight += heightDiff;
			}
		}
	}
	return blocks;
}