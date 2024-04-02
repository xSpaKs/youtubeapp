import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  const updateUser = newUser => {
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{user, updateUser}}>
      {children}
    </AuthContext.Provider>
  );
}
