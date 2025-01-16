import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResData.json";
import { BrowserRouter, json } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should search res cards for burger text input ", async () => {
    await act(async() => 
     render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));
    
    const cardsBeforeSearch =  screen.getAllByTestId("resCards");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");
    
    fireEvent.change(searchInput, {target: {value: "burger"}});
    fireEvent.click(searchBtn);

    const cardsAfterSearch =  screen.getAllByTestId("resCards");

    expect(cardsAfterSearch.length).toBe(2);
});

it("Should search res cards for burger text input ", async () => {
    await act(async() => 
     render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));
    
    // const cardsBeforeFilter =  screen.getAllByTestId("resCards");
    // expect(cardsBeforeFilter.length).toBe(20);

    const filterBtn = screen.getByRole("button", {name: "Top Rated Restaurant"});

    fireEvent.click(filterBtn);

    const cardsAfterFilter =  screen.getAllByTestId("resCards");
    // console.log(cardsAfterFilter)

    expect(cardsAfterFilter.length).toBe(3);
});