import "./styles.css";

function displayPerson(first, last, school, year) {
  return (
    <div>
      {" "}
      {first} {last} {school} {year}{" "}
    </div>
  );
}

export default function App() {
  let people = [
    ["Mikkail", "Allen", "WCHS", "2022"],
    ["Justin", "Apupalo", "NYIT", "2025"],
    ["Christopher", "Bonifacio", "OCA", "2022"],
    ["Angel", "Campoverde", "Cristo Rey High School", "2022"],
    ["Mahdiya", "Chowdhury", "TYWLS", "2023"],
    ["Diego", "Cruz", "Macalester", "2026"]
  ];

  // let list = [];
  // for (let person of people) {
  //   let first = person[0];
  //   let last = person[1];
  //   let school = person[2];
  //   let year = person[3];
  //   list.push(displayPerson(first, last, school, year));
  // }
  let list = people.map(function (person) {
    return displayPerson(person[0], person[1], person[2], person[3], person[4]);
  });
  console.log();

  return <div> {list} </div>;
}
