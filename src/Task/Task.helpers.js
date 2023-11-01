/**
 * ...
 */
const createId = () =>
  `${Math.random().toString()}-${new Date().getTime()}`;

/**
 * ...
 */
const addTaskContainer = (props) => {
  const created = new Date();
  const id = createId();
  return addTaskFunctional({ ...props, created, id });
};

/**
 * @param {object} props
 * @param {Array} props.list
 * @param {Date} props.created
 * @param {string} props.title
 * @param {string} props.id
 * @param {'start' | 'end'} props.position
 */
export const addTaskFunctional = (props) => {
  const { list, title, created, id, position } = props;

  return [
    ...(position === "end" ? list : []),
    {
      id,
      title,
      created,
    },
    ...(position === "start" ? list : []),
  ];
};

export const helpers = { addTaskContainer };
