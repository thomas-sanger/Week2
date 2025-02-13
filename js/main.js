// when the window loads, call this function to create an unordered list
window.onload = function () {
  // Create an unordered list
  const ul = document.createElement("ul");

  // Define list items
  const items = [
    "My grandad's fish stew",
    "Chili on a cold day",
    "Broccoli cheddar soup from Panera",
    "Homemade grilled cheese",
    "Anything that my fiance cooks ( because I don't have to ;) )",
  ];

  // Loop thorugh each item in the array
  items.forEach((text) => {
    // Create a <li> element for each item
    const li = document.createElement("li");
    // Set the text content of the <li> element to the current item
    li.textContent = text;
    // Append the <li> element to the <ul>
    ul.appendChild(li);
  });

  //Append the list to the body of the html file
  document.body.appendChild(ul);
};

console.log("JavaScript is really fun!");
