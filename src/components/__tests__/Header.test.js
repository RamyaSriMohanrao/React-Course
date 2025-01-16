import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";


it("should render Header component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
   
    const loginButton = screen.getByRole("button", {name : "Login"});

    expect(loginButton).toBeInTheDocument();

});

it("should render Header component with a Cart items 0", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
   
    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();

});

it("should render Header component with a Cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
   
    const cartItems = screen.getByText(/Cart/); //we can also pass regex over here

    expect(cartItems).toBeInTheDocument();

});

it("should render Header component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
   
    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name : "Logout"})

    expect(logoutButton).toBeInTheDocument();

});