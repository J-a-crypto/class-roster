import "./styles.css";

// import people from "./people.js"

function displayPerson(first, last, school, year, pets) {
  return (
    <div>
      {" "}
      {first} {last} {school} {year}{" "}
    </div>
  );
}
let people = [
  { firstName: "Mikkail", lastName: "Allen", school: "WCHS", gradYear: "2022" },
  {
    firstName: "Justin",
    lastName: "Apupalo",
    school: "NYIT",
    gradYear: "2025"
  },
  {
    firstName: "Christopher",
    lastName: "Bonifacio",
    school: "OCA",
    gradYear: "2022"
  },
  {
    firstName: "Angel",
    lastName: "Campoverde",
    school: "Cristo Rey High School",
    gradYear: "2022"
  },
  {
    firstName: "Mahdiya",
    lastName: "Chowdhury",
    school: "TYWLS",
    gradYear: "2023"
  },
  {
    firstName: "Diego",
    lastName: "Cruz",
    school: "Macalester",
    gradYear: "2026"
  }
];
// let people = [
//   ["Mikkail", "Allen", "WCHS", "2022"],
//   ["Justin", "Apupalo", "NYIT", "2025"],
//   ["Christopher", "Bonifacio", "OCA", "2022"],
//   ["Angel", "Campoverde", "Cristo Rey High School", "2022"],
//   ["Mahdiya", "Chowdhury", "TYWLS", "2023"],
//   ["Diego", "Cruz", "Macalester", "2026"]
// ];
let list;
export default function App() {
  list = people.map(function (person) {
    return (
      <div>
        {person.firstName} {person.lastName} {person.school} {person.gradYear}
      </div>
    );
  });
  return <div className="App">{list}</div>;
}

///Note: An Array in Array
