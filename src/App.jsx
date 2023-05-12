import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RewardsProgram } from './components/RewardsProgram';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RewardsProgram />
    </QueryClientProvider>
  );
}

export default App;
