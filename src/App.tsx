import React from 'react';
import './App.css';
import {useWindowScroll} from "./hook/useWindowScroll";

function App() {
    const {scroll, scrollTo} = useWindowScroll()
    return (
        <div style={
            {
                height: '300vh',
            }
        }>
            <div style={
                {
                    position: 'fixed',
                }
            }>
                <p>
                    Scroll position x: {scroll.x}, y: {scroll.y}
                </p>
                <button onClick={() => scrollTo({y: 0})}>Scroll to top</button>
            </div>
        </div>
    );
}

export default App;
