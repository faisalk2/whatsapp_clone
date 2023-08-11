// component
import Messenger from "./component/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";
const clientID =
  "181085426659-u0hufbok4660glprkpu19i21m1vf0ehj.apps.googleusercontent.com";

function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId={clientID}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
