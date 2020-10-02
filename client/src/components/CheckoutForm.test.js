import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.findByText(/Checkout Form/i);

    expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstName = await screen.getByLabelText(/first name/i);
    fireEvent.change(firstName, { target: { name: "firstName", value: "Darren" }});

    const lastName = screen.getByLabelText(/last name/i);
    fireEvent.change(lastName, { target: { name: "lastName", value: "Tebo" }});

    const address = screen.getByLabelText(/address/i);
    fireEvent.change(address, { target: { name: "address", value: "101 Anywhere St" }});

    const city = screen.getByLabelText(/city/i);
    fireEvent.change(city, { target: { name: "city", value: "Erie" }});

    const state = screen.getByLabelText(/state/i);
    fireEvent.change(state, { target: { name: "state", value: "PA" }});

    const zip = screen.getByLabelText(/zip/i);
    fireEvent.change(zip, { target: { name: "zip", value: "16451" }});
    
    const button = screen.getByRole("button", {name: /checkout/i});

    fireEvent.click(button);

    const successMessage = await screen.findByTestId(/successMessage/i);

    expect(successMessage).toBeInTheDocument();
});
