// import { Button } from "react-bootstrap";

const Home = () => {
  const handleClick = () => {
    console.log("Hello, Ninjas");
  };
  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>CLick me</button>
      {/* don't use with parenthesis 1since t1hat invokes the function handleClick() and run it without the user even clicking it */}
      <button onClick={handleClickAgain}>Click me again</button>
    </div>
  );
};

export default Home;
