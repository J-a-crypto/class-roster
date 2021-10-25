import "./styles.css";

function createListItem(firstname, lastname) {
  return (
    <li>
      {" "}
      {firstname} {lastname}{" "}
    </li>
  );
}
export default function App() {
  return <div className="App">{createListItem("Justin", "Apupalo")}</div>;
}
