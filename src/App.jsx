import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome } from "#components";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  ImageWindowContent,
  Contact,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageWindowContent />
      <Contact />
    </main>
  );
};

export default App;
