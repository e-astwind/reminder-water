import { StatusBar, Text } from "react-native";
import MainRoutes from "./src/routes/main.routes";
import { ThemeProvider } from "styled-components/native";
import { colors } from "./src/global/colors/colors";
import { SQLiteProvider } from "expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "./drizzle/migrations";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { DATA_BASE_NAME, db, expoDB } from "./src/database/config";
import { GlobalProvider } from "./src/contexts/GlobalContext";

export default function App() {
  const { success } = useMigrations(db, migrations);
  useDrizzleStudio(expoDB);

  if (!success) {
    return <Text> Erro ao criar o banco de dados</Text>;
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#121015" />
      <SQLiteProvider databaseName={DATA_BASE_NAME}>
        <ThemeProvider theme={colors}>
          <GlobalProvider>
            <MainRoutes />
          </GlobalProvider>
        </ThemeProvider>
      </SQLiteProvider>
    </>
  );
}
