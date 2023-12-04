export default function InputLabel({
  labelName,
  identifierName,
  userInput,
  onInputChange,
}) {
  return (
    <p>
      <label>{labelName}</label>
      <input
        type="number"
        required
        value={userInput[identifierName]}
        onChange={(event) => onInputChange(identifierName, event.target.value)}
      />
    </p>
  );
}
