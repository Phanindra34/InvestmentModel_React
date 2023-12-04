import InputLabel from "./InputLabel.jsx";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group ">
        <InputLabel
          labelName="Initial Investment"
          identifierName="initialInvestment"
          userInput={userInput}
          onInputChange={onChange}
        />
        <InputLabel
          labelName="Annual Investment"
          identifierName="annualInvestment"
          userInput={userInput}
          onInputChange={onChange}
        />
      </div>
      <div className="input-group ">
        <InputLabel
          labelName="Expected Return"
          identifierName="expectedReturn"
          userInput={userInput}
          onInputChange={onChange}
        />
        <InputLabel
          labelName="Duration"
          identifierName="duration"
          userInput={userInput}
          onInputChange={onChange}
        />
      </div>
    </section>
  );
}
