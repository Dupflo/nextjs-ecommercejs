import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { CartProvider } from "../context/cart";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ThemeProvider attribute="class">
        <main class="dark:bg-gray-800 h-screen">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CartProvider>
  );
}

export default MyApp;
