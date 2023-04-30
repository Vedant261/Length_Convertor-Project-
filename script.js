const convertBtn = document.getElementById('convert-btn');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const fromValueInput = document.getElementById('from-value');
const toValueInput = document.getElementById('to-value');

function convertLength() {
  const fromUnit = fromSelect.value;
  const toUnit = toSelect.value;
  const fromValue = parseFloat(fromValueInput.value);

  let toValue;

  if (fromUnit === 'meters') {
    if (toUnit === 'meters') {
      toValue = fromValue;
    } else if (toUnit === 'kilometers') {
      toValue = fromValue / 1000;
    } else if (toUnit === 'feet') {
      toValue = fromValue * 3.28084;
    } else if (toUnit === 'inches') {
      toValue = fromValue * 39.3701;
    }
  } else if (fromUnit === 'kilometers') {
    if (toUnit === 'meters') {
      toValue = fromValue * 1000;
    } else if (toUnit === 'kilometers') {
      toValue = fromValue;
    } else if (toUnit === 'feet') {
      toValue = fromValue * 3280.84;
    } else if (toUnit === 'inches') {
      toValue = fromValue * 39370.1;
    }
  } else if (fromUnit === 'feet') {
    if (toUnit === 'meters') {
      toValue = fromValue / 3.28084;
    } else if (toUnit === 'kilometers') {
      toValue = fromValue / 3280.84;
    } else if (toUnit === 'feet') {
      toValue = fromValue;
    } else if (toUnit === 'inches') {
      toValue = fromValue * 12;
    }
  } else if (fromUnit === 'inches') {
    if (toUnit === 'meters') {
      toValue = fromValue / 39.3701;
    } else if (toUnit === 'kilometers') {
      toValue = fromValue / 39370.1;
    } else if (toUnit === 'feet') {
      toValue = fromValue / 12;
    } else if (toUnit === 'inches') {
      toValue = fromValue;
    }
  }

  toValueInput.value = toValue;
}

convertBtn.addEventListener('click', convertLength);
