import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  const imagePath = "./src/assets/investment-calculator-logo.png";
  return (
    <header id="header">
      <img src={imagePath} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
