import "../UserInterface/CardContainer.css";

const CardContainer = (properties) => {
  const class__CardContainer = `card ${properties.className}`;
  return <div className={class__CardContainer}>{properties.children}</div>;
};

export default CardContainer;
