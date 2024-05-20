import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });

    //Write a program to find out the given number is prime or not
    const number = 2;
    let prime = true;

    if (number <= 1) {
      prime = false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          prime = false;
          break;
        }
      }
    }

    if (prime) {
      console.log("It is prime number");
    } else {
      console.log("It is not prime number")
    }

    //Write a program to calculate the factorial of a given number.
    function factorial(number) {
      if (number < 0) {
        return "Factorial is not defined for negative numbers";
      }
      let result = 1;
      for (let i = 1; i <= number; i++) {
        result *= i;
      }
      return result;
    }

    let _number = 5; 
    console.log("Factorial of " + _number + " is " + factorial(_number));

    //Write a program to generate random number for an array and sort them in ascending order without using any readymade functions.
    // console.log(Math.random());
    let arr = [];
    for(let i = 0; i<=10; i++){
      arr.push(i);
    }
    console.log("arr====>", arr)
    
  }, []);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Description</th>
            <th>Discount Percentage</th>
          </tr>
        </thead>
        <tbody>
          {products.length ? products.map((product, index) => {
            return (
              <tr key={`product-${index}`}>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.discountPercentage}</td>
              </tr>
            )
          }) : <div>Product not available</div>}
        </tbody>
      </table>
    </div>
  );
}

export default App;
