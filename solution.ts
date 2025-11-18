// Problem:1
function formatValue(value:number|string|boolean):string|number|boolean{
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    else if(typeof value === 'number'){
        return value*10;
    }
   else if(typeof value === 'boolean'){
        return !value;
    }
    return value;
}

// console.log(formatValue(10));
// console.log(formatValue('hello'));
// console.log(formatValue(true));


// Problem:2

function getLength<T>(value:T[]|string):number{
    if(typeof value === 'string'){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
    return 0;
}
// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

// Problem:3

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
     getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;}
  }

// const person1 = new Person("Yusuf", 25);
// console.log(person1.getDetails());
// const person2 = new Person('John Doe', 30);
// console.log(person1.getDetails());
// const person3 = new Person('Alice', 25);
// console.log(person2.getDetails());
// Problem :4

function filterByRating<T extends { rating: number , title: string}>(items: T[]): T[]  {
    return items.filter(item => item.rating >= 4);
}

// const books: { title: string; rating: number }[] = [
//     { title: "Book 1", rating: 4 },
//     { title: "Book 2", rating: 5 },
//     { title: "Book 3", rating: 3 }
// ];                

// const filteredBooks = filterByRating(books);
// console.log(filteredBooks);
// console.log(books);


// Problem :5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => {
    if ("isActive" in user) {
      return user.isActive === true;
    }
    return false;
  });
}


// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

// Problem :6

interface Book{
    title:string,
    author:string,
     publishedYear:number,
     isAvailable:boolean
}
    function printBookDetails(book:Book):void{
        console.log(`Title: ${book.title}, Author: ${book.author}, Published Year: ${book.publishedYear}, Availability: ${book.isAvailable ? 'Yes' : 'No'}`);

    }
// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// console.log(printBookDetails(myBook));

// Problem :7
function getUniqueValues<T>(arr: T[], arr2: T[]): T[] {
    const result: T[] = [];
    function addIfNotExists(item: T) {
        let exists = false;
        
        // Check if item already exists in result
        for (let i = 0; i < result.length; i++) {
            if (result[i] === item) {
                exists = true;
                break; 
            }
        }
        
        
        if (!exists) {
            result[result.length] = item; 
        }
    }
   
    for (let i = 0; i < arr.length; i++) {
        addIfNotExists(arr[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        addIfNotExists(arr2[i]);
    }

    return result;
}


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(arr1,arr2));

// Problem :8
type Product={
    name:string,
    price:number,
    quantity:number,
    discount?:number
}
 function calculateTotalPrice(products:Product[]):number{
  if (products.length === 0) {
    return 0;
  }
  const totalPrice = products.reduce((total, product) => {
    const discountedPrice = product.discount ? product.price * (1 - product.discount / 100) : product.price;
    return total + discountedPrice * product.quantity;
  }, 0);
  return totalPrice;
 }

// const products = [
//   { name: 'Pen', price: 10, quantity: 2 },
//   { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//   { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));
