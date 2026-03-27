import {useState} from "react";
function App() {
  let [bmi,setBmi]=useState(0.0);
  let [health,setHealth]=useState("");
  const calculate = () => {
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    let cal=Number(weight.value) * 10000 / Math.pow(Number(height.value), 2);
    const bmiValue = parseFloat(cal.toFixed(2));
    setBmi(bmiValue);

    let gender=(document.getElementById("male").classList.contains("selected"))?"Male":"Female";
    
    console.log(gender);

    if (bmiValue < 16) {
      setHealth("Severe Thinness");
    }
    else if (bmiValue < 17) {
      setHealth("Moderate Thinness");
    }
    else if (bmiValue < 18.5) {
      setHealth("Mild Thinness");
    }
    else if (bmiValue < 25) {
      setHealth("Normal");
    }
    else if (bmiValue < 30) {
      setHealth("Overweight");
    }
    else if (bmiValue < 35) {
      setHealth("Obese Class 1");
    }
    else if (bmiValue < 40) {
      setHealth("Obese Class 2");
    }
    else {
      setHealth("Obese Class 3");
    }
  }

  const toggleSelected = (e) => {
    e.target.classList.toggle("selected");
    e.target.classList.toggle("unselected");

    if (e.target.id === "male") {
      document.getElementById("female").classList.toggle("selected");
      document.getElementById("female").classList.toggle("unselected");
    }
    else{
      document.getElementById("male").classList.toggle("selected");
      document.getElementById("male").classList.toggle("unselected");
    }
  }
  return (
    <>
      <div className="card">
        <h1>BMI Calculator</h1>
        <div>
          <button id="male" className="selected" onClick={(e) => toggleSelected(e)}>Male</button>
          <button id="female" className="unselected" onClick={(e) => toggleSelected(e)}>Female</button>
        </div>
        <input id="height" type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Enter your Height(in cm)" onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '') }}></input>
        <input id="weight" type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Enter your Weight(in kg)" onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '') }}></input>
        <button onClick={() => calculate()}>Calculate</button>
      </div>
      <p>{bmi?"BMI: "+bmi:""}</p>
      <p>{health?health:""}</p>
    </>
  )
}

export default App;
