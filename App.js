import { AuthProvider } from "./src/provider/Auth";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";

const iniciarBancoDeDados = async (db) => {
  try {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      --DROP TABLE usuario;
      --DROP TABLE levelUser;

      CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT,
        password TEXT,
        level INTEGER
      );
    `);
    console.log("Banco de Dados inicializado");
  } catch (error) {
    console.log("Erro ao iniciar o Banco de Dados. ", error);
  }
};
function App() {
  return (
    <SQLiteProvider databaseName="bancoUsuario.db" onInit={iniciarBancoDeDados}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SQLiteProvider>
  );
}

export default App;
