// export default function App() {
//   return (
//     <div>
//       <h1>Famous Landmarks</h1>
//       <img 
//         src="/img/mayon.jfif" 
//         alt="Mayon Volcano" 
//         width="250"
//       />

//       <br />
//       <img 
//         src="/img/chocolatehills.jfif" 
//         alt="Chocolate Hills" 
//         width="280"
//       />

//       <p>
//         These are some of the <strong>most beautiful landmarks in the Philippines, </strong>
//         known for their natural beauty and historical value.
//       </p>
//     </div>
//   );
// }


const person = {
  name: 'Jamela Fernandez',
  theme: {
    backgroundColor: 'lightblue',
    color: 'darkblue',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    borderRadius: '10px',
    width: '50%'
  }
}

export default function ToDoList() {
  return (
    <div style={person.theme}>
      <h2>{person.name}'s To-Do List</h2>
      <img 
      className="avatar"
      src="/img/profile-picture.jpg" 
      alt="Jamela Fernandez" 
      width="200" />

      <ul>
        <li>Finish React Activity</li>
        <li>Update Gantt Chart</li>
        <li>Project Charter</li>
      </ul>
    </div>
  );
}
