
// * A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// * S is empty;
// * S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// * S has the form "VW" where V and W are properly nested strings.
// * For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// * Write a function:

// * function solution(S);

// * that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// * For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

// * Write an efficient algorithm for the following assumptions:

// * N is an integer within the range [0..200,000];
// * string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
function solution ( S )
{
    // * write your code in JavaScript (Node.js 8.9.4)
    if (S.length % 2 !== 0)
        return 0;
    let stack = [];
    let pair = "";
    for (let i = 0; i < S.length;i++)
    {
        if (S[i] === '(' || S[i] === '[' ||S[i] === '{')
            stack.push(S[i]);
        else
        {
            pair = stack.pop() + S[i];
            if (pair !== '()' && pair !== '[]' && pair !== '{}')
                return 0;
        }
    }
    if (stack.length !== 0)
        return 0;
    return 1;
}
// * function solution ( S ) {
// * 	S = S.split("");
// * 	var stack = [];
// * 	for (var i = 0; i < S.length; i++) {
// * 		var c = S[i];
// * 		if (c == "{" || c == "(" || c == "[") stack.push(c);
// * 		else if (c == "}" || c == ")" || c == "]") {
// * 			var t = stack.pop() + c;
// * 			if (t != "{}" && t != "()" && t != "[]") return 0;
// * 		} else return 0;
// * 	}

// * 	if (stack.length > 0) return 0;

// * 	return 1;
// * }
// * 	function solution(S) {
// *     if (0 === S.length) {
// *         return 1
// *     }
// *     let stack  = []
// *     for (let i = 0; i < S.length; i++) {
// *         if ('(' === S[i] || '{' === S[i] || '[' === S[i]) {
// *             stack.push(S[i])
// *         } else {
// *             let couple = [stack.pop(), S[i]].join('')
// *             if ('()' !== couple && '{}' !== couple && '[]' !== couple) {
// *                 return 0
// *             }
// *         }
// *     }

// *     if (stack.length) {
// *         return 0
// *     }
// *     return 1
// * }
// * function solution ( S )
// * {

// *     const openingTags = {
// *         '[': ']',
// *         '{': '}',
// *         '(': ')',
// *     };

// *     const stack = [];

// *     for (const char of S) {
// *         // * if char is not an opening tag, it is a closing tag
// *         if (openingTags.hasOwnProperty(char)) {
// *             stack.push(char);
// *         } else if (openingTags[stack.pop()] !== char) {
// *             return 0;
// *         }

// *     }

// *     return Number(stack.length < 1);

// * }
// * https// *danwritescode.com/brackets-codility-100-correct-solution-in-javascript/