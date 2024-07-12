import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const register = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, currentUSer => {
      setLoading(false)
      console.log(currentUSer)
      setUser(currentUSer)

      return () => subscribe();
    })
  }, [])
  const authInfo = { user, loading, register };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element
}

export default AuthProvider;
