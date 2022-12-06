import React from 'react';
import List from './components/Products/List';

const sources = ['mongo', 'mysql'];

function App() {
    return (
        <div className="flex w-1/2 m-auto justify-around gap-12 mt-8">
            {sources.map((s) => (
                <List source={s} />
            ))}
        </div>
    );
}

export default App;
