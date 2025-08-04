import { Header } from "@/widgets/header";
import Providers from "../providers";
import MainRouter from "../routes";

import "reset-css";
import "../styles/fonts.css";
import "../styles/global.css";
import "../styles/theme.css";

function App() {
  return (
    <Providers>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <MainRouter />
      </main>
    </Providers>
  );
}

export default App;
