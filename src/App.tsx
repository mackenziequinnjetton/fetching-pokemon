import './App.css';
import { PokemonInformation } from './components/PokemonInformation';
import { PokemonSearch } from './components/PokemonSearch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonSearch />
      <PokemonInformation />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
