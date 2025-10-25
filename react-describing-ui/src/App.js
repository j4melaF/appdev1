import { getImageUrl } from './utils.js'

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Rimuru's Battle Preparation List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Slime Core Crystal" 
        />
        <Item 
          isPacked={true} 
          name="Demon Lord Cloak" 
        />
        <Item 
          isPacked={false} 
          name="Veldora’s Support Scroll" 
        />
        <Item 
          isPacked={false} 
          name="Potion Flask" 
        />
      </ul>
    </section>
  );
}
