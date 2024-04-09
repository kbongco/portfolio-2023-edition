import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#807F7F", // Use any color here
        color: "white",
        fontFamily: "Playfair Display, serif",
      },
      h1: {
        fontFamily: "Playfair Display, serif",
        color: "white",
        fontSize: "2xl",
        fontWeight: "bold",
        // Add other custom styles as needed for h1
      },
      h2: {
        fontFamily: "Playfair Display, serif",
        color: "white",
        fontSize: "xl",
        fontWeight: "bold",
        // Add other custom styles as needed for h2
      },
      h3: {
        fontFamily: "Playfair Display, serif",
        color: "white",
        fontSize: "lg",
        fontWeight: "bold",
        // Add other custom styles as needed for h3
      },
      // Add styles for other heading levels as needed
    },
  },
});

export default customTheme;
