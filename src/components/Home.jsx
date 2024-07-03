import Landing from './Landing';
import Form from './Form';
import Thanks from './Thanks';

const Home = ({currentPage, name, age, email, incrementPage, handleChange, reset}) => {
  // Most all of your work for this lab will be done here in the HomePage component.

  // Set up conditional rendering below to determine which component to show on our home page!
  let landingPage = false;
  let form = false;
  let thankYou = false;
  let error = false;

  if(currentPage === 0){
    landingPage = true;
  }
  else if(currentPage === 1){
    landingPage = false;
    form = true;

    }
  else if(currentPage === 2 && Number(age) >= 18){
    form = false;
    thankYou = true;
  }
  else if(currentPage === 2 && Number(age) < 18){
    form = false;
    error = true;
  }

  return (
    <div className="home">
      {landingPage ? <Landing incrementPage={incrementPage} reset={reset}/> : <div></div>}
      {form ? <Form name={name} age={age} email={email} incrementPage={incrementPage} handleChange={handleChange} reset={reset} /> : <div></div>}
      {thankYou ? <Thanks reset={reset}/> : <div></div>}
    </div>
  )
}

export default Home
