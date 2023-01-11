const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  <div className="container">
    <h1>Social Buttons</h1>
    <div className="buttons-container">
      <Button className="yellow" buttonText="Like" />
      <Button className="white" buttonText="Comment" />
      <Button className="blue" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
