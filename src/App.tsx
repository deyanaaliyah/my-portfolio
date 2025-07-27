import "./App.scss";
import { NavigationBar, Footer } from "./components";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <main className="content">
        <AppRoutes />
      </main>

      <footer className="Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
