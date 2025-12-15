"use client";
import { useCursorify } from "@cursorify/react";

export default function EmojiCursor() {
  const { mouseState, style, mouseX, mouseY } = useCursorify();

  // Decide which emoji to display
  const emoji = (() => {
    if (mouseState === "mouseDown") return "✊";
    if (style === "pointer") return "👆";
    return "🖐️";
  })();

  return (
    <div
      style={{
        position: "fixed",
        top: mouseY,
        left: mouseX,
        width: 40,
        height: 40,
        fontSize: 30,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // Important! Cursor doesn’t block clicks
        zIndex: 9999,
      }}
    >
      {emoji}
    </div>
  );
}
