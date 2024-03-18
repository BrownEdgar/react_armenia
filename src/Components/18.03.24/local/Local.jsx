import CustomHook from './CustomHook'

export default function Local() {
  const [count, saveToStorage] = CustomHook("count");



  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1 style={{ color: "green" }}>GeekForGeeks</h1>
      <h2>useLocalStorage</h2>
      <h4>Count - {count}</h4>
      <button onClick={() => {
        saveToStorage("arr", [8, 4, 5, 8, 9])
      }}>
        Increment
      </button>
    </div>
  );
};
