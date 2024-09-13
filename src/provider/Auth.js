import React, { createContext, useState, useContext, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGame, setIsGame] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [userLogado, setUserLogado] = useState(null);
  const [level, setLevel] = useState(0);

  const db = useSQLiteContext();

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const gameOn = () => setIsGame(true);
  const gameOut = () => setIsGame(false);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (userLogado) {
      console.log("entrando aqui de inicio");
      console.log("Usuário logado atualizado:", userLogado);

      login();
    }
  }, [userLogado]);

  console.log("allUsers:", allUsers);

  const addUser = async (newUser, navigation) => {
    try {
      const query = await db.prepareAsync(
        "INSERT INTO usuario (user, password, level) VALUES (?, ?, ?)"
      );
      await query.executeAsync([newUser.user, newUser.password, newUser.level]);
      console.log("Usuário salvo com sucesso");
      await getUsers();
      navigation.navigate("Login");
    } catch (error) {
      console.log("Erro ao adicionar o usuário", error);
    }
  };

  const getUsers = async () => {
    try {
      const allRegisters = await db.getAllAsync("SELECT * FROM usuario");
      console.log("esses são todos registros", allRegisters);
      setAllUsers(allRegisters);
    } catch (error) {
      console.log("Erro ao ler os dados dos usuários: ", error);
    }
  };

  const loginExist = (userr, navigation) => {
    const verificationLogin = allUsers.find(
      (u) => u.user === userr.user && u.password === userr.password
    );
    console.log("dados da const verification:", verificationLogin);

    if (verificationLogin) {
      setUserLogado(verificationLogin);
    } else {
      logout();
    }
  };

  const updateLevel = async (newLevel) => {
    console.log("novo level:", newLevel);

    try {
      await db.runAsync("UPDATE usuario SET level = ? WHERE id = ?", [
        newLevel,
        userLogado.id,
      ]);
      console.log("Atenção!", "Usuário salvo com sucesso!");
      setUserLogado({ ...userLogado, level: newLevel });
      await getUsers();
    } catch (error) {
      console.log("Erro ao atualizar level do jogador.", error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        setAllUsers,
        allUsers,
        isCreate,
        setIsCreate,
        addUser,
        getUsers,
        loginExist,
        updateLevel,
        level,
        setLevel,
        userLogado,
        gameOn,
        gameOut,
        isGame,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
