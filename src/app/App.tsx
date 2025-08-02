import { Header } from "@/widgets/Header";
import Providers from "./providers";
import MainRouter from "./routes";
import Button from "@/shared/ui/Button";
// import RepeatIcon from "@icons/repeat.svg";
import PlusIcon from "@icons/plus.svg?react";
import RepeatIcon from "@icons/repeat.svg?react";
import HomeIcon from "@icons/home.svg?react";
import CopyIcon from "@icons/copy.svg?react";
import TrashIcon from "@icons/trash.svg?react";

import "reset-css";
// import "normalize.css";
import "./styles/fonts.css";
import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <Providers>
      <Header />
      <main>
        <MainRouter />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Button variant="contained" size="large">
            Generate Now
          </Button>
          <Button variant="contained" size="large" loading>
            Generate Now
          </Button>
          <Button variant="contained" size="large" disabled>
            Generate Now
          </Button>
          <Button variant="outlined" size="large" startIcon={<RepeatIcon />}>
            Try Again
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<RepeatIcon />}
            disabled
          >
            Try Again
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<PlusIcon height={24} width={24} />}
          >
            Create New
          </Button>
          <Button variant="contained" size="medium" startIcon={<PlusIcon />}>
            Create New
          </Button>

          <Button variant="outlined" size="small" startIcon={<HomeIcon />} />

          <Button variant="text" startIcon={<TrashIcon />}>
            Delete
          </Button>
          <Button variant="text" endIcon={<CopyIcon />}>
            Copy to clipboard
          </Button>
        </div>
      </main>
    </Providers>
  );
}

export default App;
