import "./style.css";
type Cars = {
  manufacturer: string;
  fabricate: string;
  year: number;
  ps: number;
  model: string;
  drive: string;
  country: string;
  image: string;
  id: number;
};

let carList: Cars[] = [];

const carForm = document.getElementById("carForm") as HTMLFormElement;
const manufacturerElement = document.getElementById(
  "manufacturer"
) as HTMLInputElement;
const fabricateElement = document.getElementById(
  "fabricate"
) as HTMLInputElement;
const yearElement = document.getElementById("year") as HTMLInputElement;
const psElement = document.getElementById("ps") as HTMLInputElement;
const modelElement = document.getElementById("model") as HTMLInputElement;
const driveElement = document.getElementById("drive") as HTMLInputElement;
const countryElement = document.getElementById("country") as HTMLInputElement;
const imageElement = document.getElementById("image") as HTMLInputElement;

const carErrorOutput = document.getElementById("error-text") as HTMLDivElement;
const carListOutput = document.getElementById("cardContainer");

function createCar(): Cars {
  const newCar: Cars = {
    manufacturer: manufacturerElement.value,
    fabricate: fabricateElement.value,
    year: Number(yearElement.value),
    ps: Number(psElement.value),
    model: modelElement.value,
    drive: driveElement.value,
    country: countryElement.value,
    image: imageElement.value,
    id: carList.length,
  };
  return newCar;
}

function validateCar(car: Cars): string {
  if (car.manufacturer.length <= 2) {
    return "Manufacturer should contain more than two characters";
  }
  return "";
}

carForm?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  console.log("form was submitted");

  const newCarVariable = createCar();
  const errorMessage = validateCar(newCarVariable);
  if (errorMessage === "") {
    addCarToArray(newCarVariable);
    showCars(newCarVariable);
    carForm.reset();
  } else {
    carErrorOutput.innerText = errorMessage;
  }
});

function addCarToArray(newCar: Cars) {
  carList.push(newCar);
  console.log(newCar);
  console.log(carList);
}

function showCars(car: Cars) {
  const cardElement = document.createElement("div") as HTMLDivElement;
  carListOutput?.appendChild(cardElement);
  cardElement.setAttribute("class", "myCard");
  cardElement.style.background = `url(${imageElement.value}) no-repeat center center / cover`;
  //   cardElement.classList.add("myCard");

  let manufacturerOutput = document.createElement("h2") as HTMLHeadElement;
  manufacturerOutput.innerText = car.manufacturer;
  cardElement.appendChild(manufacturerOutput);

  let fabricOutput = document.createElement("h3") as HTMLHeadElement;
  fabricOutput.innerText = car.fabricate;
  cardElement.appendChild(fabricOutput);

  let yearOutput = document.createElement("p") as HTMLParagraphElement;
  yearOutput.innerText = car.year.toString();
  cardElement.appendChild(yearOutput);

  let psOutput = document.createElement("p") as HTMLParagraphElement;
  psOutput.innerText = car.ps.toString();
  cardElement.appendChild(psOutput);

  let modelOutput = document.createElement("p") as HTMLParagraphElement;
  modelOutput.innerText = car.model;
  cardElement.appendChild(modelOutput);

  let driveOutput = document.createElement("p") as HTMLParagraphElement;
  driveOutput.innerText = car.drive;
  cardElement.appendChild(driveOutput);

  let countryOutput = document.createElement("p") as HTMLParagraphElement;
  countryOutput.innerText = car.country;
  cardElement.appendChild(countryOutput);

  const deleteBtn = document.createElement("button") as HTMLButtonElement;
  deleteBtn.setAttribute("class", "delete");
  deleteBtn.textContent = "Delete Car";
  deleteBtn.addEventListener("click", () => {
    carList = carList.filter((carEl: Cars) => carEl.id !== car.id);
    cardElement.remove();
  });
  cardElement.appendChild(deleteBtn);
}
