type AddRoasterProps = {
  faction: string;
};

export default function AddRoaster({ faction }: AddRoasterProps) {
  return (
    <>
      <h1>Add Roaster</h1>
      <p>This is the Add Roaster page.</p>
      <p>Here you can add a new roaster to your collection.</p>
      <p>Use the form below to enter the details of the roaster.</p>
      {/* Add form for adding a roaster here */}
    </>
  );
}
