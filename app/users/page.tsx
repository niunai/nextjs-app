'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import Users from './users';

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary fallback={<p>An error has occurred</p>}>
                    <div style={{ margin: '2em' }}>
                        <Suspense fallback={<p>loading...</p>}>
                            <Users />
                        </Suspense>
                    </div>
                </ErrorBoundary>
            </QueryClientProvider>
        </div >
    );
}

export default App;