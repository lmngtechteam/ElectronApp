import React from 'react';

class Index extends React.Component {
    componentDidMount = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js")
                .catch(err => console.error("Service worker registration failed", err));
        } else {
            console.log("Service worker not supported");
        }
    }
    render() {
        return (<div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            Hello World
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>)
    }
}

export default Index;