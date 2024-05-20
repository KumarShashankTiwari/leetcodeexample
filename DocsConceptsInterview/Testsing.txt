# testinginreact

For Test all suites
1. npm test

2. Save name by filename.test.js
2. 1. We Can test UI components tests .
2. 2. Render, Screen are from react testing lirary.

Example:
test from Jest Library
test('renders learn react paragraph', () => {
  render(<App />);
  const linkElement = screen.getByText(/How hello/i);
  expect(linkElement).toBeInTheDocument();
});

3. For utils functions specefix

Example
test('testing foor sum 2', ()=>{
    let a=100;
    let b=200
    let total =a+b;
    expect(sum(a,b)).toBe(total)
})

For particular file
4. npm test /Registeration/

5. watch mode

p - gives suggestion for filenames.
t - give suggestion for test name
f - run suites with failed tests only

6. Describe