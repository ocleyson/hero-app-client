import GlobalStyle from '../../styles/global';

type Props = {
    children: JSX.Element
}

function App({ children }: Props) {
    return (
        <div className="app">
            <GlobalStyle />

            { children }
        </div>
    );
}

export default App;
