

function getCounterValue() {
    const el = document.getElementById("counter");
    const value = parseInt(el.textContent, 10);
    return Number.isNaN(value) ? 0 : value;
  }
  
  function setCounterValue(val) {
    document.getElementById("counter").textContent = String(val);
  }
  
  /*  Simple Functions */
  function tickUp() {
    setCounterValue(getCounterValue() + 1);
  }
  
  function tickDown() {
    setCounterValue(getCounterValue() - 1);
  }
  
  /* Simple For Loop */
  function runForLoop() {
    const end = getCounterValue();
    const nums = [];
  
    for (let i = 0; i <= end; i++) {
      nums.push(i);
    }
  
    document.getElementById("forLoopResult").textContent = nums.join(" ");
  }
  
  /* Repetition with Condition */
  function showOddNumbers() {
    const end = getCounterValue();
    const odds = [];
  
    for (let i = 1; i <= end; i += 2) {
      odds.push(i);
    }
  
    document.getElementById("oddNumberResult").textContent = odds.join(" ");
  }
  
  /* Arrays */
  function addMultiplesToArray() {
    const end = getCounterValue();
    const arr = [];
  
    if (end >= 5) {
      const start = Math.floor(end / 5) * 5; 
      for (let n = start; n >= 5; n -= 5) {
        arr.push(n);
      }
    }
  
    
    console.log(arr);
  }
  
  /* Objects and Form Fields */
  function printCarObject() {
    const typeVal = document.getElementById("carType").value;
    const mpgVal = document.getElementById("carMPG").value;
    const colorVal = document.getElementById("carColor").value;
  
    const carObj = {
      cType: typeVal,
      cMPG: mpgVal,
      cColor: colorVal
    };
  
    console.log(carObj);
  }
  
  /* Objects and Form Fields pt. 2 */
  function loadCar(which) {
    let obj = null;
  
    if (which === 1) obj = carObject1;
    if (which === 2) obj = carObject2;
    if (which === 3) obj = carObject3;
  
    if (!obj) return;
  
    document.getElementById("carType").value = obj.cType;
    document.getElementById("carMPG").value = obj.cMPG;
    document.getElementById("carColor").value = obj.cColor;
  }
  
  /* Changing Styles */
  function changeColor(which) {
    const p = document.getElementById("styleParagraph");
  
    if (which === 1) p.style.color = "red";
    if (which === 2) p.style.color = "green";
    if (which === 3) p.style.color = "blue";
  }
  
