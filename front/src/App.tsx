import React from 'react';
import List from './components/List';

const sources = ['mongo', 'mysql'];

function App() {
    return (
        <div className="flex w-1/2 m-auto justify-around">
            {sources.map((s) => (
                <List source={s} />
            ))}
        </div>
    );
}

export default App;
