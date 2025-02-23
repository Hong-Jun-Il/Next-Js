const time = "오후 10시 10분";
const [hours, minutes] = time.match(/\d+/g);
console.log(`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`); // "12:10"
