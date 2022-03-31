import type { IGunUserInstance, IGunInstance} from "gun/types";
import db from "./store";
import GUN from "gun/gun";
import "gun/sea"
// @ts-ignore
const gun:IGunInstance = GUN(["https://shadow-link.tk/gun"]);
const user:IGunUserInstance = gun.user();

gun.on("auth", async (r) => {
  // const alias = await user.get("alias");
  // console.log(`Signed in as ${alias}`);
});

// attaching gun to window for testing purposes
window.gun = gun;
window.user = user;

export { user as gunUser, gun as default };
