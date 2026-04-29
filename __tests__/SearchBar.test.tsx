import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "@/components/SearchBar/SearchBar";

describe("SearchBar", () => {
  it("renders input with placeholder", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    expect(screen.getByPlaceholderText("Search products...")).toBeInTheDocument();
  });

  it("renders current value", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="backpack" onChange={handleChange} />);
    const input = screen.getByDisplayValue("backpack");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);

    const input = screen.getByPlaceholderText("Search products...");
    fireEvent.change(input, { target: { value: "speaker" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("speaker");
  });
});