import "./styles.css";

function displayPerson(first, last, school, year, pets) {
  return (
    <div>
      {" "}
      {first} {last} {school} {year}{" "}
    </div>
  );
}
let people = [
  ["Mikkail", "Allen", "WCHS", "2022"],
  ["Justin", "Apupalo", "NYIT", "2025"],
  ["Christopher", "Bonifacio", "OCA", "2022"],
  ["Angel", "Campoverde", "Cristo Rey High School", "2022"],
  ["Mahdiya", "Chowdhury", "TYWLS", "2023"],
  ["Diego", "Cruz", "Macalester", "2026"]
];
let list;
export default function App() {
  list = people.map(function (person) {
    // TODO
    return (
      <div>
        {person[0]} {person[1]} {person[2]} {person[3]}
      </div>
    );
  });
  return <div className="App">{list}</div>;
}

///Note: An Array in Array
