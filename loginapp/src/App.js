import "./styles.css";
const img = "https://i.pravatar.cc/305";

export default function App() {


  const HeaderBanner = (props) => (
      <h1>Create Account</h1>
    )
  

  const AppLogins = () => (
      <div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    )
  

  const TextInput = (props) => (
      <input type={props.inputType} />
    )
  

  const Agreement = () => (
      <div></div>
  )

  const Buttons = (props) => (
      <div>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    )
  

  const Form = () => (
      <div>
        <HeaderBanner />
        <AppLogins />
        <p>or use your email for registration:</p>
        <TextInput className="name capitalize" />
        <TextInput className="email" />
        <TextInput className="password hidecharacters" />
        <Agreement />
        <Buttons />
      </div>
    )
  

  const FormContainer = () => (
      <Form id="Form"/>
    )
  

  const HeroImage = () =>  (  
      <img />
    )
  

  const ContainerCard = () => (
      <div>
        <FormContainer id="FormContainer"/>
        <HeroImage id="HeroImage" img={img} />
      </div>
    )
  

  return (
    <div className="App">
      <ContainerCard id="ContainerCard"/>
    </div>
  );
}
