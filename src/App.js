import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import CharacterList from "./components/CharacterList.js";
import LocationList from "./components/LocationList.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      <LocationList />
      <CharacterList />
    </main>
  );
}
