/*function reverseString(str){
    return str;

}
reverseString("");
*/

function reverseString() {
    // Step 1. Use the split() method to return a new array
    var inputStr = document.getElementById('stringName').value;

    /*Comments: You had written inputStr.split(inputString);
        1. inputString variable is not defined. what we have defined is inputStr. Whatever variables you define, you can only use those.
        2. We have to split the array with empty string ("") and not the inputStr

    */

    var splitString = inputStr.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    
   // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(inputStr); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string

    /*

    Comments: Same problem as above, join with emptyString and not inputStr
    */
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    
    /*
        Comments - When you write "return" statement, the function execution ends at that line and the control is passed to the calling function.
        Hence your code was not reaching "if" statement because it was just returning the control.

    */
    //return joinArray; // "olleh"*/

    //Step 5. Check inputString to the reversed string "joinArray"

    /*Comments:  If statements dont end with semicolon, they are the start of the block*/

    if (inputStr == joinArray) {
        document.write("<b> Your word is a Palindrome! </b>");
    } else {
        document.write("<b> Your word is not a palindrome. Try again! <b/>");
    }

}