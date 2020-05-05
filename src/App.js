import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterRedux from './components/CounterRedux';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1> React Redux demo </h1>
        </header>
        <main>
            <Counter />
            <Counter />
            <CounterRedux />
            <CounterRedux />
        </main>
        </div>
    );
}

export default App;
