import { router } from './router';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FontSizingProvider from './components/context/FontSizingProvider';
import ContentContainer from './components/common/ContentContainer';
import LayoutContainer from './components/common/LayoutContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

const client = new QueryClient();

function App() {
  return (
    <LayoutContainer>
      <FontSizingProvider>
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </FontSizingProvider>
    </LayoutContainer>
  );
}

export default App;
