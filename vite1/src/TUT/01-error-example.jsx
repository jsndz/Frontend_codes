const ErrorExample = () => {
  let count = 0;
  return (
    <>
      <h2>useState error example</h2>
      <button
        type="button"
        onClick={function () {
          count++;
          console.log(count);
        }}
        className="btn"
      >
        Click Me
      </button>
      <p>{count}</p>
    </>
  );
};

export default ErrorExample;
