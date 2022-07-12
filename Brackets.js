
function solution ( S )
{
	S = S.split( "" );
	var stack = [];
	for ( var i = 0; i < S.length; i++ )
	{
		var c = S[ i ];
		if ( c == '{' || c == '(' || c == '[' )
			stack.push( c );
		else if ( c == '}' || c == ')' || c == ']' )
		{
			var t = stack.pop() + c;
			if ( t != "{}" && t != "()" && t != "[]" )
				return 0;
		}
		else
			return 0;
	}

	if ( stack.length > 0 )
		return 0;

	return 1;
}
	function solution(S) {
    if (0 === S.length) {
        return 1
    }
    let stack  = []
    for (let i = 0; i < S.length; i++) {
        if ('(' === S[i] || '{' === S[i] || '[' === S[i]) {
            stack.push(S[i])
        } else {
            let couple = [stack.pop(), S[i]].join('')
            if ('()' !== couple && '{}' !== couple && '[]' !== couple) {
                return 0
            }
        }
    }

    if (stack.length) {
        return 0
    }
    return 1
}
function solution ( S )
{

    const openingTags = {
        '[': ']',
        '{': '}',
        '(': ')',
    };

    const stack = [];

    for (const char of S) {
        // if char is not an opening tag, it is a closing tag
        if (openingTags.hasOwnProperty(char)) {
            stack.push(char);
        } else if (openingTags[stack.pop()] !== char) {
            return 0;
        }

    }

    return Number(stack.length < 1);

}