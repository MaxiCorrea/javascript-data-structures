import { Kiosk } from "./Kiosk"

describe("The Kiosk class Features" , ()=> {
    test("Should load movies from file name" , ()=> {
        let kiost = new Kiosk();
        kiost.loadMovies("resources/films.txt");
    })    
})