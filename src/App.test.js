import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("shows the Stats section by default", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: "Basic Stats" })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Stats" })).toHaveAttribute(
    "aria-current",
    "page"
  );
});

test("nav buttons switch sections", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Quests" }));
  expect(
    screen.getByText("UX Engineer @ EY Design Studio")
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Inventory" }));
  expect(
    screen.getByRole("heading", { name: "Inventory" })
  ).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "GraphQL" })).toBeInTheDocument();
});

test("Side Quests tab shows side projects", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Quests" }));
  fireEvent.click(screen.getByRole("button", { name: "Side Quests" }));
  expect(screen.getByText("Japan 2024 Recapped")).toBeInTheDocument();
});

test("theme toggle switches to professional text", () => {
  render(<App />);
  fireEvent.click(
    screen.getByRole("checkbox", {
      name: "Switch between video game and professional view",
    })
  );

  expect(screen.getByRole("button", { name: "About" })).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Experience" })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
});
