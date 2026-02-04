(() => {
  // src/app.js
  var doc = {
    roofForm: document.querySelector("#roofForm"),
    houseWidth: document.querySelector("#houseWidth"),
    roofPitch: document.querySelector("#roofPitch"),
    rafterLength: document.querySelector("#rafterLength"),
    roofHeight: document.querySelector("#roofHeight")
  };
  var calculate = () => {
    const houseWidth = doc.houseWidth.value;
    const roofPitch = doc.roofPitch.value;
    doc.rafterLength.value = calcRafterLength(houseWidth, roofPitch);
    doc.roofHeight.value = calcRoofHeight(houseWidth, roofPitch);
  };
  doc.roofForm.addEventListener("submit", (e) => {
    e.preventDefault();
    calculate();
  });
  function calcRafterLength(houseWidth, roofPitch) {
    return houseWidth / 2 / Math.cos(roofPitch * Math.PI / 180);
  }
  function calcRoofHeight(houseWidth, roofPitch) {
    return houseWidth / 2 * Math.tan(roofPitch * Math.PI / 180);
  }
})();
