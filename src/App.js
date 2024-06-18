import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Checkout from "./pages/Checkout";
import CartDetails from "./pages/CartDetails";
import ProductListingPage from "./pages/ProductListingPage";
import ProductListings from "./pages/ProductListings";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-1920":
        title = "";
        metaDescription = "";
        break;
      case "/cart-details-1920":
        title = "";
        metaDescription = "";
        break;
      case "/product-listing-page":
        title = "";
        metaDescription = "";
        break;
      case "/product-listings":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart-details" element={<CartDetails />} />
      <Route path="/product-listing" element={<ProductListingPage />} />
      <Route path="/product-listings" element={<ProductListings />} />
      <Route path="/blog" element={<ProductListings />} />
      <Route path="/about" element={<ProductListings />} />
      <Route path="/terms-and-conditions" element={<ProductListings />} />
    </Routes>
  );
}
export default App;
