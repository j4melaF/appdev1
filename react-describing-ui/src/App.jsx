function Profile() {
  return (
    <img
      src="/img/profile-picture.jpg"
      alt="My Photo"
      
      
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>My Gallery</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
