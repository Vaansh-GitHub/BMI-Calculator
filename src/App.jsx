
function App() {

  const calculate = () => {
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    let bmi = Number(weight.value) * 10000 / Math.pow(Number(height.value), 2);
    let gender=(document.getElementById("male").classList.contains("selected"))?"Male":"Female";
    console.log(bmi);
    console.log(gender);

    if (bmi < 16) {
      console.log("Severe Thinness");
    }
    else if (bmi < 17) {
      console.log("Moderate Thinness")
    }
    else if (bmi < 18.5) {
      console.log("Mild Thinness")
    }
    else if (bmi < 25) {
      console.log("Normal")
    }
    else if (bmi < 30) {
      console.log("Overweight")
    }
    else if (bmi < 35) {
      console.log("Obese Class 1")
    }
    else if (bmi < 40) {
      console.log("Obese Class 2")
    }
    else {
      console.log("Obese Class 3")
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
    </>
  )
}

export default App;
