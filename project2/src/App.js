import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [form, setForm] = useState({}); // use 'form' and 'setform' for use one thing multiple times
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName(""); // to get blank
    setEmail("");
  };
  // const addData = () => {
  //   setData([...data, form]);
  //   setForm("");
  // };

  const handlePress = (event) => {
    if (event.key === "Enter") {
      addData();
    }
    //console.log(event.key);
  };

  // for removing Item

  const removeItem = (index) => {
    let arr = data;
    data.splice(index, 1); // for removing element
    setData([...arr]);
  };

  return (
    <div className="App">
      <Header />

      {/* Form section */}

      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            onKeyPress={(event) => handlePress(event)}
            onPaste={() => window.alert("Naam to kud se likh le!!")}
            value={name}
            onChange={(event) => setName(event.target.value)}
            // value={form.name}
            // onChange={(event) => setForm({...form,name:event.target.value})}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            // onCopy={()=>window.alert("Copy Mat kar be!!")}
            onKeyPress={(event) => handlePress(event)}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            // value={form.email}
            //onChange={(event) => setForm({...form, email: event.target.value})}
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
          />
          <Button
            draggable
            onDrag={() => console.log("Dragged...")}
            onDoubleClick={() => window.alert("single click kar be!!")}
            onClick={addData}
            variant="contained"
            color="success"
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
