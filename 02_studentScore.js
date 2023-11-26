/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

let score;
function calculateGrade(score)
{

    switch (true) 
    {
        case score>=90:
            console.log("90 with pass ");
            break;
            case score>=70:
                console.log("80 with pass ");
                break;
        default:
            console.log(" pass ");
            break;

    }
}
calculateGrade(92);