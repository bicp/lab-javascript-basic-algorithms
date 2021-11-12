// Iteration 1: Names and Input
let hacker1 = "Neo";
console.log(`The drive's name is ${hacker1}`);

let hacker2 = "Morpheus";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals
let driverCapital = "";
for (let i = 0; i < hacker1.length; i++) {
  driverCapital = driverCapital + hacker1[i].toUpperCase() + " ";
}
console.log(driverCapital);

//3.2
let navReversed = hacker2.split("").reverse().join("");
console.log(navReversed);

//3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1
//b1.1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis odio posuere, viverra nulla vel, pulvinar lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur id malesuada lectus. Pellentesque ex urna, euismod iaculis nulla vel, dignissim luctus est. Ut scelerisque luctus dictum. Nullam dapibus nunc in lorem facilisis cursus. Phasellus porta dolor in iaculis cursus. Suspendisse dignissim neque eget erat euismod, nec sagittis velit vehicula. Aliquam tincidunt commodo ipsum, eu interdum dui tempor at.

Vestibulum tempus diam in purus hendrerit laoreet. Quisque sit amet porttitor massa. Sed et bibendum mauris, vitae pretium ligula. Etiam suscipit posuere augue vitae rutrum. Curabitur dictum, metus id dictum vehicula, ex risus efficitur mi, nec laoreet massa tellus vel ligula. Mauris convallis, felis vitae gravida mollis, ligula quam imperdiet nisl, a porttitor augue urna nec arcu. Nam congue vitae lacus ac ornare. Pellentesque facilisis congue massa vestibulum bibendum. Curabitur elit mauris, pulvinar eu massa sed, condimentum porttitor erat. Phasellus tempus neque vel vestibulum rhoncus. Mauris eget porta urna, id tincidunt erat.

Sed ac sem tortor. In non nisi quis magna ullamcorper laoreet. Donec sodales ultricies tempus. Suspendisse potenti. Praesent rutrum fringilla purus vitae scelerisque. Nulla tincidunt ultrices velit nec suscipit. Curabitur luctus condimentum ante, quis accumsan odio mattis eu. Phasellus ut quam ac justo faucibus facilisis tempus ut turpis. Phasellus facilisis elementum lobortis.`;

const wordCount = lorem.split("et");
console.log(`The number of words is: ${wordCount.length}`);

//b1.2
function countEt(lorem) {
    const stringsSeparatedByEt = lorem.split("et");
    return stringsSeparatedByEt.length - 1;
  }
