/*Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
The values returned by these functions are printed to stdout by locked stub code in the editor.*/

function getArea(length, width) {
    let area;
    area = length * width;
    //console.log(area)
    return area;
}


function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (length + width);
   //console.log(perimeter);
    return perimeter;
}