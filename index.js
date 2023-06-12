// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat () {
    cats.shift ();
}
function appendCat(Broom) {
    let newCats = [...cats, "Broom"];
    return newCats;
}
function prependCat(Arnold) {
    let copyCats = ["Arnold"].concat(cats);
    return copyCats;
}
function removeLastCat() {
    let removeCats = cats.slice(0, -1);
    return removeCats;
}
function removeFirstCat () {
    let firstCat = cats.slice(1)
    return firstCat;
}