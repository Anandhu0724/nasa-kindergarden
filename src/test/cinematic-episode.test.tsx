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
  it("plays background music at low volume independently of voice-over mute and pauses with the episode", () => {
    render(<Index />);
    const music = screen.getByLabelText("Episode background music") as HTMLAudioElement;
    const play = vi.spyOn(music, "play");
    const pause = vi.spyOn(music, "pause");
    fireEvent.click(screen.getByRole("button", { name: "Watch episode" }));
    expect(play).toHaveBeenCalled();
    expect(music.volume).toBe(0.12);
    fireEvent.click(screen.getByRole("button", { name: "Mute voice-over" }));
    expect(music.muted).toBe(false);
    pause.mockClear();
    fireEvent.click(screen.getByRole("button", { name: "Pause episode" }));
    expect(pause).toHaveBeenCalled();
  });

  it("links the Kinder Garden footer to the requested website", () => {
    render(<Index />);

    expect(screen.getByRole("link", { name: "Kinder Garden" })).toHaveAttribute(
      "href",
      "https://kinder-garden-eight.vercel.app",
    );
  });

  it("starts playback and moves to the Moon scene with the next control", () => {
    render(<Index />);

    fireEvent.click(screen.getByRole("button", { name: "Watch episode" }));
    expect(screen.getByRole("button", { name: "Pause episode" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next scene" }));
    expect(screen.getByRole("heading", { name: "The Lunar Graveyard", level: 2 })).toBeInTheDocument();
  });

  it("plays scene-specific voice-over and lets viewers mute it", () => {
    render(<Index />);
    const audio = screen.getByLabelText("Episode voice-over") as HTMLAudioElement;
    const departure = audio.getAttribute("src");
    fireEvent.click(screen.getByRole("button", { name: "Watch episode" }));
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Mute voice-over" }));
    expect(audio.muted).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: "Unmute voice-over" }));
    expect(audio.muted).toBe(false);
    fireEvent.click(screen.getByRole("button", { name: "Next scene" }));
    expect(audio.getAttribute("src")).not.toBe(departure);
  });
});
