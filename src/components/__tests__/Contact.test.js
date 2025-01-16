import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {


    // beforeAll(() => {
    //     console.log("before all")
    // })

    // beforeEach(() => {
    //     console.log("before each")
    // })

    test("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });
    
    
    test("Should load button in contact component", () => {
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    
    });
    
    test("Should load inputName in contact component", () => {
        render(<Contact />);
    
        const InputName = screen.getByPlaceholderText("Name");
    
        expect(InputName).toBeInTheDocument();
    
    });
    
    
    test("Should load 2 input boxes on the contact component", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");// Querying
    
        // console.log(inputBoxes);
    
        expect(inputBoxes.length).toBe(2);
    })

})
