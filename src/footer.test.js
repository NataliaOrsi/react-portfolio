import { render, screen } from "@testing-library/react";
import Footer from "./Footer"; // Assuming Footer is the correct import path

test("should render footer without crash", () => {
  render(<Footer />); // Render the Footer component once

  const githubLink = screen.getByTestId("github"); // Access the element by its test ID

  expect(githubLink).toHaveAttribute("href", "https://github.com/NataliaOrsi");
  expect(githubLink).toHaveAttribute("target", "_blank");
  expect(githubLink).toHaveAttribute("rel", "noreferrer");

  const likedinLink = screen.getByTestId("linkedin");

  expect(likedinLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/nataliaorsi155/"
  );
  expect(githubLink).toHaveAttribute("target", "_blank");
  expect(githubLink).toHaveAttribute("rel", "noreferrer");

  const emailLink = screen.getByTestId("email");

  expect(emailLink).toHaveAttribute("href", "mailto:naty.m.orsi@gmail.com");
  expect(githubLink).toHaveAttribute("target", "_blank");
  expect(githubLink).toHaveAttribute("rel", "noreferrer");
});
