import { BrowserRouter } from "react-router-dom";
import RootLayout from "@shared/ui/RootLayout";
import { MobileProvider } from "./mobile/MobileProvider";

// import { store } from "../store/store";
// import { Toaster } from 'react-hot-toast';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <BrowserRouter>
    <MobileProvider>
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
    </MobileProvider>
  </BrowserRouter>
);
export default Providers;
