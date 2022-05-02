import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage";
import ViewPage from "./pages/ViewPage";
import { GlobalStyle } from "./style/globalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ViewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            }
          />          
          <Route path="/*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
