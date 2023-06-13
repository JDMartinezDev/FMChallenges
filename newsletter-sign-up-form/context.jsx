import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const navigate = useNavigate()

  const validateEmail = (e) => {
    let regex =
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    return regex.test(e);
  };

  const handleChange = (e) => {
    setEmail(e)
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(email !== "" && isValidEmail) navigate('/suscribed')
}

const handleDismiss = () =>{
    navigate('/')
    setEmail("")
    setIsValidEmail(true)
}

  useEffect(() => {
    console.log(isValidEmail);
    if (email !== "") setIsValidEmail(validateEmail(email));
    else setIsValidEmail(true);
  }, [email]);


  useEffect(() => {
    const updateWndDimensions = () => {
        const newW = window.innerWidth;
        setWindowWidth(newW)
    }

    window.addEventListener("resize", updateWndDimensions)

    return () => window.removeEventListener("resize", updateWndDimensions)
  }, [])

  return (
    <GlobalContext.Provider value={{ email, setEmail, isValidEmail, setIsValidEmail, handleChange, handleSubmit, handleDismiss, windowWidth }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
