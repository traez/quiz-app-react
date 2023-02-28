const arr = ["hello world", "kill you", "trae zeeofor", "foo bar", "lorem ipsum", "hey there", "good morning"];

/*
const filteredArr = arr.filter((word) => {
  // Convert the word to an array of words
  const words = word.split(" ");
  
  // Merge the words into one word by joining them with no space
  const mergedWord = words.join("");
  
  // Check if the length of the merged word is exactly 2
  return mergedWord.length === 2;
}); */

const mergedArr = arr.map((word) => {
  return word.split(" ").join("")
})

console.log(mergedArr); 


/*
#################################
Test 30
Filter
https://jsbeginners.com/filter-project/

dataset used because it's a class. button dataset property values and div classes property values have same names.
so if event happens on button with class X, div also with class X will show.
internal CSS works over external. So .style.display is good, while .classList.add bad as 2 selectors conflicting
#################################
(function(){

  let buttons = document.querySelectorAll("button");
  let div = document.querySelectorAll("div");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const filter = e.target.dataset.filter;
      
      div.forEach((item) =>{
      if (filter === "all") {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(filter)){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        } }
      })
    })
  })

})();

(function(){
  let input = document.querySelector("input");
  let div = document.querySelectorAll("div");

  input.addEventListener('keyup', (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();

    div.forEach((item) => {
      if (item.textContent.includes(searchFilter)){
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  })
  })
})();
*/
