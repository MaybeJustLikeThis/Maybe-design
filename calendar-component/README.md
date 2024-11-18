受控模式：
```js
function App() {
  const [value, setValue] =  useState(dayjs('2023-11-08'));

  return (
    <div className="App">
      <Calendar value={value} onChange={(val) => {
        setValue(val)
      }}></Calendar>
    </div>
  );
}
```

不受控模式：
```js
function App() {
  return (
    <div className="App">
      <Calendar defaultValue={dayjs('2023-11-08')}></Calendar>
    </div>
  );
}
```