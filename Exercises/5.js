import myPromise from "./1";

/**
 * In the function, you receive and array
 * You should return a promise that resolves with a new array that contains
 * the strings from the previous array but capitalized
 * If there is an item in the array which is not a string, the promise should reject
 * with the string "All items in the array should be of type string"
 * @param {string[]} arrayOfStrings
 */
function makeAllCapsAsync(arrayOfStrings) {
  return new Promise((resolve, reject) => {
    let upperCaseArray = [];

    for (let item of arrayOfStrings) {
      //for each item in arrayOfStrings
      if (typeof item !== "string") {
        reject("All items in the array should be of type string"); //reject promise if any item is not a string
      }
      upperCaseArray.push(item.toUpperCase()); //push that item (in upper case) into new array
    }
    resolve(upperCaseArray);
  });
}
// Your code

export default makeAllCapsAsync;
