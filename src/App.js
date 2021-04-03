import "./App.css";
import { useState } from "react";

function App() {
  const [lowerNumber, setLowerNumber] = useState(0);
  const [higherNumber, setHigherNumber] = useState(0);
  const [percentDifference, setPercentDifference] = useState(0);

  const waitForSeconds = (secondsToWait) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, secondsToWait * 1000);
    });
  };

  const showInputFieldChangeByAppInUI = (inputFieldId) => {
    let htmlElement = document.getElementById(inputFieldId);
    const inputFieldChangeByAppCssClass = "inputFieldChangeByApp";

    htmlElement.classList.add(inputFieldChangeByAppCssClass);
    waitForSeconds(0.7).then(() => {
      htmlElement.classList.remove(inputFieldChangeByAppCssClass);
    });
  };

  const handleLowerNumberInputEvent = (event) => {
    setLowerNumber(event.target.value);
    let lowerNumberTemp = event.target.value;
    let percentDifferenceTemp =
      ((Number(higherNumber) - Number(lowerNumberTemp)) / Number(lowerNumberTemp)) * 100;

    showInputFieldChangeByAppInUI("percentDifference");
    setPercentDifference(percentDifferenceTemp);
  };
  const handleHigherNumberInputEvent = (event) => {
    setHigherNumber(event.target.value);
    let higherNumberTemp = event.target.value;

    let percentDifferenceTemp =
      ((Number(higherNumberTemp) - Number(lowerNumber)) / Number(lowerNumber)) * 100;

      showInputFieldChangeByAppInUI("percentDifference");
    setPercentDifference(percentDifferenceTemp);
  };
  const handlePercentDifferenceInputEvent = (event) => {
    setPercentDifference(event.target.value);

    let percentDiffTemp = event.target.value;

    let higherNumberTemp = ((Number(percentDiffTemp)/100) * Number(lowerNumber)) + Number(lowerNumber);

    setHigherNumber(higherNumberTemp);
    showInputFieldChangeByAppInUI("higherNumber");
  };

  return (
    <div className="App">
      <h1 className="App-Heading">Percent Difference Calculator</h1>
      <div>
        <form>
        <div class="mb-3">
            <label for="higherNumber" class="form-label">
              Higher number
            </label>
            <input
              type="number"
              class="form-control"
              id="higherNumber"
              value={higherNumber}
              onInput={handleHigherNumberInputEvent}
            />
          </div>
          <div class="mb-3">
            <label for="lowerNumber" class="form-label">
              Lower number
            </label>
            <input
              type="number"
              class="form-control"
              id="lowerNumber"
              value={lowerNumber}
              onInput={handleLowerNumberInputEvent}
            />
          </div>
          <div class="mb-3">
            <label for="percentDifference" class="form-label">
              Percent difference
            </label>
            <div className="input-group mb-3">
              <input
                type="number"
                class="form-control"
                id="percentDifference"
                value={percentDifference}
                onInput={handlePercentDifferenceInputEvent}
              />
              <span class="input-group-text">%</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
