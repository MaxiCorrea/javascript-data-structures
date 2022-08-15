import { List } from "../002-Lists/List";
import { Customer } from "./Customer";
import { readFileSync} from "fs";

export class Kiosk {
  #movies;
  #customers;

  constructor() {
    this.#movies = new List();
    this.#customers = new List();
  }

  /**
   *  load all movies names from file system.
   * @param {filename} filename
   */
  loadMovies = (filename) => {
    const contents = readFileSync(filename, "utf-8");
    const arr = contents.split(/\r?\n/);
    arr.forEach((e) => {
      this.#movies.append(e);
    });
  };
  
  /**
   *  Print all movies in the console
   */
  displayMovies = () => {
    console.log(`${this.#movies}`);
  };

  /**
   * Print all customers in the console
   */
  displayCustomers = () => {
    console.log(`${this.#customers}`);
  };

  /**
   * Print kiosk in the console. (Movies and Customers)
   */
  display = () => {
    console.log(`${this.#movies}`);
    console.log(`${this.#customers}`);
  };

  /**
   *  Check out a movie
   * 
   * @param {*} name name of customer
   * @param {*} movie name of movie
   * @returns 
   */
  checkout = (name, movie) => {
    if(this.#movies.contains(movie)) {
        let customer = new Customer(name , movie);
        this.#customers.append(customer);
        this.#movies.remove(movie);
        return true;
    }
    return false;
  }

}
