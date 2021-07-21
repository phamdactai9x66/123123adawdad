
import './App.css';

function App() {
  return (
    <>
      <div className="container">
      <h1>What's the Plan for Today</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ToDo</th>
      <th scope="col">Decs</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td />
      <td />
      <td>
        <button className="btn">Delete</button>
        <button className="btn btn-success">Detail</button>
      </td>
    </tr>
  </tbody>
  </table>
      </div>
    </>
  );
}

export default App;
