import {render, screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
// import MOCKLABEL_DATA from "../mocks/resLabelMock.json";
import "@testing-library/jest-dom";


it("Should render RestaurantCard component with props data", () => {

    render(<RestaurantCard resData = {MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});

// it("Should render RestaurantCard component with promoted label", () => {

//     render(<RestaurantCard RestaurantCard = {MOCK_DATA}/>);

//     const openInfo = screen.getByText("opened")

//     expect(openInfo).toBeInTheDocument();
// });