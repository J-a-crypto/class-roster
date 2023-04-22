import "./styles.css";

// import people from "./people.js"

let people = [
  {
    firstName: "First Name ",
    lastName: "Last Name",
    school: "School",
    gradYear: "Year",
    color: "Color",
    pronouns: "Pronouns",
    media: "Media"
  },
  {
    firstName: "Mikkail",
    lastName: "Allen",
    school: "WCHS",
    gradYear: "2022",
    color: "blue",
    pronouns: "He/Him",
    media: "Tiktok"
  },
  {
    firstName: "Justin",
    lastName: "Apupalo",
    school: "NYIT",
    gradYear: "2025",
    color: "red",
    pronouns: "He/Him",
    media: "Insta"
  },
  {
    firstName: "Christopher",
    lastName: "Bonifacio",
    school: "OCA",
    gradYear: "2022",
    color: "red",
    pronouns: "He/Him",
    media: "Insta"
  },
  {
    firstName: "Angel",
    lastName: "Campoverde",
    school: "Cristo Rey High School",
    gradYear: "2022",
    color: "red",
    pronouns: "He/Him",
    media: "Insta"
  },
  {
    firstName: "Mahdiya",
    lastName: "Chowdhury",
    school: "TYWLS",
    gradYear: "2023",
    color: "red",
    pronouns: "She/Her",
    media: "Tiktok"
  },
  {
    firstName: "Diego",
    lastName: "Cruz",
    school: "Macalester",
    gradYear: "2026",
    color: "red",
    pronouns: "He/Him",
    media: "Insta"
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
            <td>
              <span style={{ color: person.color }}>{person.color}</span>{" "}
            </td>
            <td>{person.pronouns}</td>
          </tr>
        </tbody>
      </div>
    );
  });
  return <div className="App"> {list} </div>;
}
