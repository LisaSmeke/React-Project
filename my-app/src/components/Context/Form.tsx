const UserForm = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // do something
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Como te llamas?</label>
      <input type="text" placeholder="name" />
      <button>Send my name</button>
    </form>
  );
};

export default UserForm;
