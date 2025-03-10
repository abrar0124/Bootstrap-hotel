function Text({ type, content }) {
  return (
    <>
      {type == "h2" ? (
        <h2 style={{ marginLeft: "5%", marginTop: "4%" }}>{content}</h2>
      ) : type == "h5" ? (
        <h5>{content}</h5>
      ) : type == "h1" ? (
        <h1 style={{ marginLeft: "9%" }}>{content}</h1>
      ) : type == "h4" ? (
        <h4>{content}</h4>
      ) : type == "h3" ? (
        <h3>{content}</h3>
      ) : type == "h6" ? (
        <h6>{content}</h6>
      ) : type == "link" ? (
        <a className="custom-hover navbar-brand text-muted" href="#">
          {content}
        </a>
      ) : (
        <p className="text-muted">{content}</p>
      )}
    </>
  );
}
export default Text;
