import './App.css'

function App() {
  
  function handleClick() {
    alert("i am Clicked");
  }

  function handleMouseOver() {
    alert("MouseOver me")
  }

  function handleInputChange(e) {
    console.log("Value till now:", e.target.value);
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    // i am waiting my custom behaviour down
    alert("Form Submit?")
  }

  return (
    <div>

    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleInputChange}/>
      <br /> <br />
      <button type="submit">Submit</button>
    </form>

    <p onMouseOver={handleMouseOver}>
      I am Over
    </p>

      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
