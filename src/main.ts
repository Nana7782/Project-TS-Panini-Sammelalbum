import "./style.css";
type Cars = {
    manufacturer: string,
    fabricate: string,
    year: number,
    ps: number,
    model: string,
    drive: string,
    country: string,
    image: string,
    id: number,
};

let carList: Cars [] = [];

const carForm = document.getElementById("carForm") as HTMLFormElement;
const manufacturerElement = document.getElementById("manufacturer") as HTMLInputElement;
const fabricateElement = document.getElementById("fabricate") as HTMLInputElement;
const yearElement = document.getElementById("year") as HTMLInputElement;
const psElement = document.getElementById("ps") as HTMLInputElement;
const modelElement = document.getElementById("model") as HTMLInputElement;
const driveElement = document.getElementById("drive") as HTMLInputElement;
const countryElement = document.getElementById("country") as HTMLInputElement;
const imageElement = document.getElementById("image") as HTMLInputElement;

function createCar(): Cars{
    const newCar: Cars = {
        manufacturer: manufacturerElement.value,
        fabricate: fabricateElement.value,
        year: Number (yearElement.value),
        ps: Number (psElement.value),
        model: modelElement.value,
        drive: driveElement.value,
        country: countryElement.value,
        image: imageElement.value,
        id: carList.length
    };
    return newCar;
};
 
carForm?.addEventListener ("submit", (event:Event) => {
    event.preventDefault();

    const newCarVariable = createCar ();
});






