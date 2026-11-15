import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Index } from "@/routes/index";

beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue(undefined);
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Cinematic episode", () => {
  it("links the Kinder Garden footer to the requested website", () => {
    render(<Index />);

    expect(screen.getByRole("link", { name: "Kinder Garden" })).toHaveAttribute(
      "href",
      "https://kindergarden-nasa.vercel.app",
    );
  });

  it("starts playback and moves to the Moon scene with the next control", () => {
    render(<Index />);

    fireEvent.click(screen.getByRole("button", { name: "Watch episode" }));
    expect(screen.getByRole("button", { name: "Pause episode" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next scene" }));
    expect(screen.getByRole("heading", { name: "The Lunar Graveyard", level: 2 })).toBeInTheDocument();
  });
});
