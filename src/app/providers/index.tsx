import { BrowserRouter } from "react-router-dom";
import RootLayout from "@shared/ui/RootLayout";

// import { store } from "../store/store";
// import { Toaster } from 'react-hot-toast';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <BrowserRouter>
    <RootLayout>{children}</RootLayout>
    {/* <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'red',
            color: '#fff',
          },
        }}
      /> */}
  </BrowserRouter>
);
export default Providers;
