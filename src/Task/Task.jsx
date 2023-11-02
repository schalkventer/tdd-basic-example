/**
 * @typedef {object} Task
 * @prop {string} id
 * @prop {string} title
 * @prop {Date} created
 * @prop {'completed' | 'pending' | 'archived'} status
 */

export const Task = (props) => {
  const { title } = props;

  return (
    <div
      style={{
        background: "white",
        height: "12rem",
        width: "25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid blue",
        borderRadius: "6px",
        fontSize: "2rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0.5rem",
      }}
    >
      <h2>{title}</h2>
    </div>
  );
};
