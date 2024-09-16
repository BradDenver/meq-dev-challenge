import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import Chart from "./components/Chart";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./App.css";

function App() {
  return (
    <MantineProvider>
      <Notifications />
      <Chart />
    </MantineProvider>
  );
}

export default App;
