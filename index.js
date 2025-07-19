// Task 1: Create Upskill profile object
const upskillProfile = {
  name: "perpetua Itanwu",
  age: 25,
  hobbies: ["Programming", "Reading", "Hiking"],
  introduce: function() {
    console.log(`Hi, my name is ${this.name}`);
  }
};

upskillProfile.introduce();

console.log("My second best hobby is:", upskillProfile.hobbies[1]);

// Task 2: Explanation of callback function
function processData(data, callback) {
  console.log("Processing data:", data);
  setTimeout(() => {
    const result = data.toUpperCase();
    callback(result);
  }, 1000);
}

// Using the callback function
processData("hello world", function(processedResult) {
  console.log("Processed result:", processedResult);
});


const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);