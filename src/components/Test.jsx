function Test() {
    function clickMe() {
        document.getElementById('button');
        onclick(alert('Hello!'));
    }
    return (
        <>
            <p>Hello React!</p>
            <button onClick={clickMe}>Click Me!</button>
        </>
    );
}

export default Test;
