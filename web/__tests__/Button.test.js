import React from "react";
import { render } from "@testing-library/react";
import Button from "../components/Button/Button";

describe("Button", () => {
    const testProps = {
        text: "Prueba",
        href: "/noticias",
    };
    it("renders a button", () => {
        const cmp = render(<Button {...testProps} />);
        expect(cmp.container).toHaveTextContent(testProps.text);
    });

    it("changes style on hover", () => {
        const cmp = render(<Button {...testProps} />);

        const button = cmp.getByText(testProps.text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute("target", "_self");
    });

    it("redirects to google", () => {
        const cmp = render(<Button {...testProps} />);

        const button = cmp.getByText(testProps.text);
        expect(button).toHaveAttribute("href", testProps.href);
    });
});
