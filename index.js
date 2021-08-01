let configResult = [0, 2, 2];
let wheelSpinning = false;
let currentStep = 0;
const common = {
  textFontSize: 13,
  textMargin: 0,
  textOrientation: "curved",
  textAlignment: "center",
  textAligment: "center",
  animation: {
    type: "spinToStop",
    duration: 5,
    spins: 15,
    callbackFinished,
  },
};

let valueBet = 5;

function getYourCash() {
  return parseFloat(document.getElementById("cash").textContent.replace(',', ''));
}

function setYourCash(newValue) {
  document.getElementById("cash").textContent = newValue.toString().replace(/,/g, "").replace(/\d(?=(\d{3})+(?!\d))/g, "$&,");
}

function onChangeV1(val, text) {
  configResult[0] = val;
  const elementV1 = document.getElementById('dropdown1');
  elementV1.textContent = text;

  if (val !== 0) {
    const elementbtnV2 = document.getElementById('dropdownbtn2');
    elementbtnV2.classList.add('read-only');
    const elementbtnV3 = document.getElementById('dropdownbtn3');
    elementbtnV3.classList.add('read-only');
  }

  if (val === 0) {
    const elementV2 = document.getElementById('dropdownbtn2');
    elementV2.classList.remove('read-only');
    const elementV3 = document.getElementById('dropdownbtn3');
    elementV3.classList.remove('read-only');
  }
}

function onChangeV2(val, text) {
  configResult[1] = val;
  const elementV2 = document.getElementById('dropdown2');
  elementV2.textContent = text;
  if (val !== 2) {
    const elementbtnV3 = document.getElementById('dropdownbtn3');
    elementbtnV3.classList.add('read-only');
  }

  if (val === 2) {
    const elementV3 = document.getElementById('dropdownbtn3');
    elementV3.classList.remove('read-only');
  }
}

function onChangeV3(val, text) {
  configResult[2] = val;
  const elementV3 = document.getElementById('dropdown3');
  elementV3.textContent = text;
}

function onChangeBet(val, id) {
  const element = document.getElementById(`btn-${valueBet}`);
  element.classList.remove("active");
  const element1 = document.getElementById(id);
  element1.classList.add("active");
  valueBet = val;
}

const configs = [
  {
    ...common,
    id: 1,
    numSegments: 7,
    rotationAngle: -45,
    innerRadius: 84,
    outerRadius: 40,
    segments: [
      { fillStyle: "#7ce67f", text: "NEXT", value: -1, size: 90 },
      { fillStyle: "#2b9cc4", text: "x0.5", value: 0.5, size: 45  },
      { fillStyle: "#535bd4", text: "X0", value: 0, size: 45  },
      { fillStyle: "#9156f0", text: "x1", value: 1, size: 45  },
      { fillStyle: "#f25ea3", text: "x1.5", value: 1.5, size: 45  },
      { fillStyle: "#2b9cc4", text: "x0.5", value: 0.5, size: 45  },
      { fillStyle: "#535bd4", text: "X0", value: 0, size: 45  },
    ],
    pins: {
      number: 7,
      responsive: true,
      fillStyle: "#ffffff",
      margin: -47,
    },
  },
  {
    ...common,
    id: 2,
    numSegments: 8,
    rotationAngle: 0,
    innerRadius: 124,
    outerRadius: 84,
    segments: [
      { fillStyle: "#535bd4", text: "X0", value: 0, size: 45 },
      { fillStyle: "#9156f0", text: "x2", value: 2, size: 45 },
      { fillStyle: "#7ce67f", text: "NEXT", value: -1, size: 45 },
      { fillStyle: "#e7706f", text: "x1.5", value: 1.5, size: 45 },
      { fillStyle: "#f0416c", text: "x7", value: 7, size: 45 },
      { fillStyle: "#9156f0", text: "x2", value: 2, size: 45 },
      { fillStyle: "#f25ea3", text: "x5", value: 5, size: 45 },
      { fillStyle: "#e7706f", text: "x1.5", value: 1.5, size: 45 },
    ],
    pins: {
      number: 8,
      responsive: true,
      fillStyle: "#ffffff",
      margin: -42,
    },
  },
  {
    ...common,
    id: 3,
    numSegments: 15,
    rotationAngle: -45,
    innerRadius: 160,
    outerRadius: 124,
    segments: [
      { fillStyle: "#535bd4", text: "X0", value: 0, size: 22.5 },
      { fillStyle: "#9156f0", text: "x2", value: 2, size: 22.5 },
      { fillStyle: "#f25ea3", text: "x5", value: 5, size: 22.5 },
      { fillStyle: "#a8b5f7", text: "x9", value: 9, size: 22.5 },
      { fillStyle: "#f0d948", text: "Nổ Hũ (x35)", size: 45, value: 35 },
      { fillStyle: "#e7706f", text: "x3", value: 3, size: 22.5 },
      { fillStyle: "#f0416c", text: "x7", value: 7, size: 22.5 },
      { fillStyle: "#f25ea3", text: "x5", value: 5, size: 22.5 },
      { fillStyle: "#9156f0", text: "x2", value: 2, size: 22.5 },
      { fillStyle: "#535bd4", text: "X0", value: 0, size: 22.5 },
      { fillStyle: "#a8b5f7", text: "x9", value: 9, size: 22.5 },
      { fillStyle: "#f25ea3", text: "x5", value: 5, size: 22.5 },
      { fillStyle: "#db39c8", text: "x20", value: 20, size: 22.5 },
      { fillStyle: "#e7706f", text: "x3", value: 3, size: 22.5 },
      { fillStyle: "#f0416c", text: "x7", value: 7, size: 22.5 }
    ],
    pins: {
      number: 15,
      responsive: true,
      fillStyle: "#ffffff",
      margin: -38,
    },
  },
];

// set size cho từng ô màu

function getDefaultSize(segments) {
  const configHaveSize = segments.reduce(
    (countConfigHaveSize, configResult) =>
    configResult.size
        ? {
            count: countConfigHaveSize.count + 1,
            totalSize: countConfigHaveSize.totalSize + configResult.size,
          }
        : countConfigHaveSize,
    {
      count: 0,
      totalSize: 0,
    }
  );

  return (
    (360 - configHaveSize.totalSize) / (segments.length - configHaveSize.count)
  );
}

// end set size cho từng ô màu

function getWheelList(configs) {

  return configs.map(({ id, segments, ...rest }, index) => {

    const defaultSize = getDefaultSize(segments);

    const _segments = segments.reduce(
      (prev, { size, ...segmentRest }, indexSegment) => {
        const _size = size || defaultSize;
        const isFirstItem = indexSegment === 0;

        return [
          ...prev,
          {
            size,
            stopValue: isFirstItem
              ? _size
              : prev[indexSegment - 1].stopValue + _size,
            ...segmentRest
          },
        ];
      },
      []
    );

    let theWheel = new Winwheel({
      canvasId: `spin-wheel-${id}`,
      segments: _segments,
      ...rest,
    });

    function stopAngle() {
      const iHardResult = configResult[currentStep];
      const start = _segments[iHardResult - 1]?.stopValue
        ? _segments[iHardResult - 1]?.stopValue + 1
        : 0;
      const stop = _segments[iHardResult].stopValue;
      const stopAt = Math.random() * (stop - start) + start;
      theWheel.animation.stopAngle = stopAt;
    }

    return { theWheel, stopAngle };
  });
}

const wheelList = getWheelList(configs);

function resetAll() {
  wheelList.map(({ theWheel }) => {
    const { rotationAngle } = configs[currentStep];

    theWheel.canvas.classList.remove("active");
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = rotationAngle % 360;
    theWheel.draw();
    wheelSpinning = false;
  });
}

function callbackFinished(indicatedSegment) {
  const isNextSpin = indicatedSegment.value < 0;

  if (!isNextSpin) {
    const valueSuccess = valueBet * indicatedSegment.value;
    setYourCash(valueSuccess + getYourCash());
    currentStep = 0;
    resetAll();
    return;
  }
  resetWheel();
  currentStep++;
  currentStep = currentStep % configs.length;
  // nếu giá trị là ô next sẽ tiếp tục quay
  startSpin();
}

function startSpin() {
  if (wheelSpinning === false) {
    const { stopAngle, theWheel } = wheelList[currentStep];
    theWheel.canvas.classList.add("active");
    stopAngle();
    theWheel.startAnimation();
    wheelSpinning = true;
  }
}

function resetWheel() {
  const { theWheel } = wheelList[currentStep];
  theWheel.stopAnimation(false);
  theWheel.draw();
  wheelSpinning = false;
}
