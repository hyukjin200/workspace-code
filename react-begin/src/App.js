import "./App.css";
import ContentJSX from "./component/ContentJSX";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import "./Content.css";
import ContentEvent from "./component/ContentEvent";
import ContentParent from "./component/ContentParent";
import ContentChild from "./component/ContentChild";
import ContentProps from "./component/ContentProps";
import ContentUseState from "./component/ContentUseState";
import ContentUseStateForm1 from "./component/ContentUseStateForm1";
import ContentUseStateForm2 from "./component/ContentUseStateForm2";
import UseRef from "./component/UseRef";


function App() {
  let id = "guard";
  let name = "김가드";
  let address = "서울시민";
  let age = 34;
  let phone = ["010-9698-5624", "018-6534-3422", "019-2323-7865"];
  
  let user = {
    id: "guard1",
    name: "김가드1",
    address: "서울시민1",
    age: 43,
    phone: ["010-9698-5624", "018-6534-3422", "019-2323-7865"],
  };

  return (
    <div className="App">
      <Header />
      <ContentJSX />
      <hr />
      <ContentEvent />
      <hr />
      <ContentParent>
        <ContentChild name="첫째" age="34" />
        {ContentChild({ name: "두째", age: "23" })}
      </ContentParent>
      <hr />
      <ContentProps id={id} 
                    name={name} 
                    address={address} 
                    age={age}
                    gender={'남'} 
                    phone={phone}
                    />
       <ContentProps id={user.id} 
                    name={user.name} 
                    address={user.address} 
                    age={user.age}
                    gender={'남'} 
                    phone={user.phone}
                    />
        {ContentProps(user)}
        <ContentUseState/>            
        <ContentUseStateForm1/>            
        <ContentUseStateForm2/>            
        <UseRef/>            
      <Footer />
    </div>
  );
}

export default App;
