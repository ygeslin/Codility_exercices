// A non-empty array A consisting of N integers is given.

// The leader of this array is the value that occurs in more than half of the elements of A.

// An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2
// we can find two equi leaders:

// 0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
// 2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
// The goal is to count the number of equi leaders.

// Write a function:

// function solution(A);

// that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

// For example, given:

//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2
// the function should return 2, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].
// * Shortest !
function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	let totalEleFound = {};
	for (let i = 0; i < A.length; i++) {
		if (!totalEleFound[A[i]]) {
			totalEleFound[A[i]] = 1;
		} else {
			totalEleFound[A[i]]++;
		}
	}

	//console.log("totalEleFound",totalEleFound);
	let maxOccurs = 0;
	for (const [key, value] of Object.entries(totalEleFound)) {
		maxOccurs = Math.max(maxOccurs, Math.floor(value / 2));
	}

	return maxOccurs;
}

function solution(A) {
	// there is only one leader because its counts > n/2
	// 1. find it
	var n = A.length;
	var freq = {};
	var leader = -1;
	for (let i = 0; i < n; i++) {
		freq[A[i]] ? freq[A[i]]++ : (freq[A[i]] = 1);
		if (freq[A[i]] * 2 > n) {
			leader = i;
			break;
		}
	}
	// 2. count the occurances of leader up to each i
	// so you can know how many of it is to the left and how many to the right
	var counts = [];
	var occurances = 0;
	for (let i = 0; i < n; i++) {
		if (A[i] == A[leader]) occurances++;
		counts[i] = occurances;
	}

	// 3. get equiLeaders
	// now you know the counts to the left of i = counts[i] and to the right of i = maxCounts-countsUpToI
	// apply the equation and if it is satisified for both sides then this index is at equiLeader so increment the result.
	// note i+1/2 is equivalent to what is written. (multiplication is better so no losing of precision happens)
	var equiLeaders = 0;
	for (let i = 0; i < n; i++) {
		if (
			counts[i] * 2 > i + 1 &&
			(counts[counts.length - 1] - counts[i]) * 2 > n - i - 1
		)
			equiLeaders++;
	}

	return equiLeaders;
}

function solution(A) {
	var rightCounters = [];
	var leftCounters = [];
	var leaders = [];
	for (var i = A.length - 1; i >= 0; i--) {
		var current = A[i];
		if (typeof rightCounters[current] == "undefined") {
			rightCounters[current] = 1;
		} else rightCounters[current]++;
		if (rightCounters[current] > (A.length - i) / 2) leaders[i] = current;
		else {
			if (
				i != A.length - 1 &&
				rightCounters[leaders[i + 1]] > (A.length - i) / 2
			)
				leaders[i] = leaders[i + 1];
			else leaders[i] = -1;
		}
	}
	var counter = 0;
	var lastLeader = A[0];
	for (var i = 0; i < A.length; i++) {
		var current = A[i];
		if (typeof leftCounters[current] == "undefined") leftCounters[current] = 1;
		else leftCounters[current]++;
		if (leftCounters[current] > (i + 1) / 2) {
			if (current == leaders[i + 1]) counter++;
			lastLeader = current;
		} else {
			if (lastLeader != -1 && leftCounters[lastLeader] > (i + 1) / 2) {
				if (lastLeader == leaders[i + 1]) counter++;
			} else lastLeader = -1;
		}
	}
	return counter;
}
