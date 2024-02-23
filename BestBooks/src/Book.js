export function Book({ title, img, author, number }) {
  return (
    <article className="book">
      <img src={img} />
      <h2>{title}</h2>
      <h2>{author}</h2>
      <span>{`${number + 1}`}</span>
    </article>
  );
}
