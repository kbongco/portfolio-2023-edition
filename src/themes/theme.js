import { extendTheme } from "@chakra-ui/react";

// Headings grow smoothly with the screen width instead of jumping at a
// breakpoint: clamp(smallest, preferred, largest).
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#807F7F",
        color: "white",
        fontFamily: "Playfair Display, serif",
      },
      h1: {
        fontFamily: "Playfair Display, serif",
        color: "white",
        fontSize: "clamp(1.4rem, 1.15rem + 1vw, 1.875rem)",
        fontWeight: "bold",
        lineHeight: 1.25,
      },
      h2: {
        fontFamily: "Playfair Display, serif",
        color: "white",
        fontSize: "clamp(1.2rem, 1.05rem + 0.6vw, 1.5rem)",
        fontWeight: "bold",
        lineHeight: 1.3,
      },
      h3: {
        fontFamily: "Playfair Display, serif",
        color: "white",
        fontSize: "clamp(1.05rem, 1rem + 0.3vw, 1.25rem)",
        fontWeight: "bold",
        lineHeight: 1.3,
      },
    },
  },
});

export default customTheme;
