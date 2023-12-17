function InputBase({ hasError, ...props }) {
  return (
    <input
      className={`form-control ${hasError ? "is-invalid" : ""}`}
      {...props}
    />
  );
}

export default InputBase;
