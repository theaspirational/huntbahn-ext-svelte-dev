import Popup from "./Popup.svelte";
import "./tailwind.css";



const app = new Popup({
  target: document.body,
  props: {
		// we'll learn about props later
		// gun: gun,
	}
});

export default app;
