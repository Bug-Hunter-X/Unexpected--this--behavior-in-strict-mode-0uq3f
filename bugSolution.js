function myFunc() {
  console.log(this);
}

// Solutions:

// 1. Using bind():
const boundMyFunc = myFunc.bind({ name: "Object" });
boundMyFunc(); // this will now refer to the bound object

// 2. Using an arrow function (lexical 'this'):
const arrowMyFunc = () => {
  console.log(this); // 'this' inherits from its surrounding scope
};
arrowMyFunc();

// 3. Setting 'this' within a self-executing function:
(function() {
  const self = this; // self will now be the global object
  function innerFunc() {
    console.log(self);
  }
  innerFunc();
})();