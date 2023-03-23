import { render, screen } from "@testing-library/react";
import Posts from "../Test/Posts.test.js";

test('Posts has title', () => {
    render (<Posts />);
    const titleElement = screen.getByText(/posts/i);
    expect(titleElement).toBeInTheDocument();
});

