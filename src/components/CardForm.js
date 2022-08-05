export default function CardForm() {
  return (
    <>
      <form>
        <label htmlFor="topic"></label>
        <input type="text" id="topic">topic</input>
        <label htmlFor="author"></label>
        <input type="text" id="author">author</input>
        <button type="button">Submit</button>
      </form>
    </>
  );
}
