import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_MENUDATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(() => {
    Promise.resolve({
        json : () => Promise.resolve(MOCK_MENUDATA)
    })
});


it("Should load restaurant menu component", async() => {
    await act(async () => 
        render(
            <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
                <RestaurantMenu />
            </Provider>
            </BrowserRouter>

        )
    );

    const accordionHeader = screen.getByText("Garlic Bread (5)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    // const addbtns = screen.getByRole("button", {name : "Add +"});
    // fireEvent.click(addbtns[0]);

    // expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
});