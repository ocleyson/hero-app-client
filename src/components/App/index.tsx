import React from 'react';

type Props = {
    children: JSX.Element
}

function App({ children }: Props) {
    return (
        <div className="App">
            { children }
        </div>
    );
}

export default App;
