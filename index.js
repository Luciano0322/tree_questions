import { getUniqueNumber } from "./getUniqueNumber.mjs";
import { sortByType, sortUserName } from "./sort.mjs";

/**
 All following exams please using Javascript only
 1.
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: 'xxx'}
lastName, note can be empty,
cutstomerID can only be a set digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
**/
const customers = [
  { firstName: 'John', lastName: 'Doe', customerID: '003', note: '', profession: 'engineer' },
  { firstName: 'Sam', lastName: 'Smith', customerID: '001', note: 'VIP', profession: 'productOwner' },
  { firstName: 'John', lastName: 'Smith', customerID: '002', note: 'Regular', profession: 'freelancer' },
  { firstName: 'John', lastName: 'Wick', customerID: '005', note: '', profession: 'systemAnalytics' },
  { firstName: 'Anna', lastName: 'Brown', customerID: '004', note: '', profession: 'student' }
];
/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/
console.log('Q1-> ', sortUserName(customers));

/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
‘student’’)
**/

console.log('Q2-> ',sortByType(customers));


/** 2. HTML
<div class="container">
<div class="header">5/8 外出確認表</div>
<div class="content">
<ol class="shop-list">
<li class="item">麵包</li>
<li class="item">短袖衣服</li>
<li class="item">飲用水</li>
<li class="item">帳篷</li>
</ol>
<ul class="shop-list">
<li class="item">暈車藥</li>
<li class="item">感冒藥</li>
<li class="item">丹木斯</li>
<li class="item">咳嗽糖漿</li>
</ul>
</div>
<div class="footer">以上僅共參考</div>
</div>
**/
/** CSS
.container {
font-size: 14px;
}
.container .header {
font-size: 18px;
}
.container .shop-list {
list-style: none;
margin-left: -15px;
}
.container .shop-list li.item {
color: green;
}
.container .shop-list .item {
Explain why does this color not works, and how to fix make it work on
1st list 

color: blue;
}
Write styling make every other line give background color to next one 
**/

// The reason the color blue is not applied to the list items is that
// the CSS selector .container .shop-list .item has a lower specificity 
// than the .container .shop-list li.item selector. The li.item selector 
// has higher specificity because it targets li elements with the class 
// item, while the .item selector targets any element with the class 
// item within .shop-list. To make the color blue work on the first list,
// you should increase the specificity of the selector for the first list.
// One way to do this is to target the ol element specifically:
/**
 * .container .shop-list li.item {
 *   color: green;
 * }
 * .container ol.shop-list li.item {
 *   color: blue;
 * }
 *  To give every other line a background color, you can use the :nth-child pseudo-class:
 * .container .shop-list li:nth-child(odd) {
 *   background-color: #f0f0f0;
 * }
 * .container .shop-list li:nth-child(even) {
 *   background-color: #ffffff;
 * }
 * 
 */

/** 3. 
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1,
3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
Please write down a function to console log unique value from this array.
**/
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1,
  3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];

console.log('3. get unique number: ',getUniqueNumber(items));

/** 4. Can you explain about Interface and Enum, and where will you be using,
please make some examples. **/
/**
 * Interfaces are used to define the structure of objects, function signatures, 
 * and class contracts. They help in type-checking and ensuring consistency.
 * 
 * example: 
 * interface Person {
 *   firstName: string;
 *   lastName: string;
 *   age?: number; // optional property
 * }
 * 
 * function greet(person: Person) {
 *   console.log(`Hello, ${person.firstName} ${person.lastName}`);
 * }
 * const user = {
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   age: 25
 * };
 * greet(user); 
 * 
 * Enums are used to define a set of named constants. They improve code readability
 * and can represent a collection of related values.
 * 
 * example:
 * enum Profession {
 *   Student,
 *   Freelancer,
 *   ProductOwner,
 *   Engineer,
 *   SystemAnalyst
 * }
 * interface Person {
 *   firstName: string;
 *   lastName: string;
 *   profession: Profession;
 * }
 * const person1: Person = {
 *   firstName: 'Rock',
 *   lastName: 'Johnson',
 *   profession: Profession.Engineer
 * };
 * const person2: Person = {
 *   firstName: 'John',
 *   lastName: 'Smith',
 *   profession: Profession.Student
 * };
 * 
 * function describePerson(person: Person) {
 *   console.log(`${person.firstName} ${person.lastName} is a ${Profession[person.profession]}`);
 * }
 * 
 * describePerson(person1); // Output: Rock Johnson is a Engineer
 * describePerson(person2); // Output: John Smith is a Student
 * 
 */


/** 5. Can you explain the problem with the following code, and how to fix
it. 
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  handleAddCount(){
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }
  render() {
  return (
    <div>
      <h2>{this.state.count}</h2>
      <button onClick={this.handleAddCount}>Add</button>
    </div>
  );
  }
}
ReactDOM.render(
  <Count />,
  document.getElementById('root')
);
**/

/**
 * In React, this.setState is asynchronous, and calling it multiple times 
 * in succession may result in the state not updating as expected. React 
 * batches these updates for performance reasons, and you might end up with 
 * only the last update being applied.
 * 
 * To fix this issue, you should use the updater function provided by setState 
 * that correctly applies each update based on the previous state. Here’s how 
 * can modify the handleAddCount method:
 * handleAddCount() {
 *   this.setState((prev) => ({ count: prev.count + 1 }));
 *   this.setState((prev) => ({ count: prev.count + 1 }));
 *   this.setState((prev) => ({ count: prev.count + 1 }));
 * }
 */



/** 6. Please write the sample code to debounce handleOnChange **/
// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), wait);
//   };
// };

// var SearchBox = React.createClass({
//   getInitialState: function() {
//     return {
//       query: ''
//     };
//   },
//   componentWillMount: function() {
//     this.handleOnChange = debounce(this.handleOnChange, 300);
//   },
//   render: function() {
//     return <input type="search" name="p" onChange={this.handleOnInputChange}/>;
//   },
//   handleOnInputChange: function(event) {
//     this.setState({ query: event.target.value });
//     this.handleOnChange(event);
//   },
//   handleOnChange: function(event) {
//     // make ajax call
//     console.log('Check an AJAX call for:', event.target.value);
//   }
// });
// I had write an article for the debounce hook. [Here's my article link](https://ithelp.ithome.com.tw/articles/10285456)
