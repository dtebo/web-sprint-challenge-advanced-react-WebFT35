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

    const button = screen.getByRole("button", {name: /checkout/i});

    fireEvent.click(button);

    const successMessage = await screen.findByTestId(/successMessage/i);

    expect(successMessage).toBeInTheDocument();
});
