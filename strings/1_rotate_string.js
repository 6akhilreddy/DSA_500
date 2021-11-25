// https://leetcode.com/problems/rotate-string/

/*
1. Add the first string twice so that we get all the rotations of the string.
2. ex: A='abcde' (A+A) = 'abcdeabcde'
3. B = 'cdeab' - check if B is present in A+A
*/

var rotateString = function(s, goal) {
    return (s.length === goal.length && (s+s).includes(goal))
};