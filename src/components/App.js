import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function createNotes(noteItem){

//   return (
//     <Note
//     key = {noteItem.key}
//     title={noteItem.title}
//     content={noteItem.content}
//     />
//   );
// }

function App() {
  return (
    <div>
      <Header />
      {/* <Note 
      title =
      content =
      /> */}
      {/* {notes.map(createNotes)}; */}

      {/* noteItem has the value of notes  */}
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
