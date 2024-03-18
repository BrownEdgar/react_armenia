import CustomHook from './CustomHook'

export default function Local() {
    const [count, setCount] = CustomHook("count", 0);
    return (
        <div style={{ display: "grid", placeItems: "center" }}>
            <h1 style={{ color: "green" }}>GeekForGeeks</h1>
            <h2>useLocalStorage</h2>
            <h4>Count - {count}</h4>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button>
        </div>
    );
};
 