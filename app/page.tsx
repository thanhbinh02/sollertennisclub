"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  ArriveGame,
  Introduction,
  Overview,
  Slider,
  Welcome,
} from "./components";

export default function Home() {
  return (
    <main>
      <Introduction />

      <Welcome />

      <Overview />

      <Slider />

      <ArriveGame />
    </main>
  );
}
