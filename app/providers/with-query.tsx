import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export function withQuery(component: () => React.ReactNode) {
  return () => {
    const Component = component();
    return (
      <QueryClientProvider client={queryClient}>
        {Component}
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    );
  };
}
