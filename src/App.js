import "./styles.css";

// import people from "./people.js"

let people = [
  {
    firstName: "Mikkail",
    lastName: "Allen",
    school: "WCHS",
    gradYear: "2022",
    color: "blue"
  },
  {
    firstName: "Justin",
    lastName: "Apupalo",
    school: "NYIT",
    gradYear: "2025",
    color: "red"
  },
  {
    firstName: "Christopher",
    lastName: "Bonifacio",
    school: "OCA",
    gradYear: "2022",
    color: "red"
  },
  {
    firstName: "Angel",
    lastName: "Campoverde",
    school: "Cristo Rey High School",
    gradYear: "2022",
    color: "red"
  },
  {
    firstName: "Mahdiya",
    lastName: "Chowdhury",
    school: "TYWLS",
    gradYear: "2023",
    color: "red"
  },
  {
    firstName: "Diego",
    lastName: "Cruz",
    school: "Macalester",
    gradYear: "2026",
    color: "red"
  }
];
function setColor() {}

export default function App() {
  let list;
  list = people.map(function (person) {
    return (
      <div>
        <thead>
          <tr>
            <th style={{ width: "20%" }}></th>
            <th style={{ width: "20%" }}></th>
            <th style={{ width: "20%" }}></th>
            <th style={{ width: "100%" }}></th>
            <th style={{}}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.school}</td>
            <td>{person.gradYear}</td>
            <td class={person.color}>{person.color}</td>
          </tr>
        </tbody>
      </div>
    );
  });
  return <div className="App"> {list} </div>;
}
