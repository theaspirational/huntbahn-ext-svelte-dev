import Gun from "gun/gun";
export { default as SEA } from "gun/sea.js";
import "gun/lib/radix";
import "gun/lib/radisk";
import "gun/lib/store";
import "gun/lib/rindexed";
import "gun/lib/webrtc";
import "gun/nts";

import Buffer from "buffer";
window.Buffer = Buffer.Buffer;
window.setImmediate = setTimeout;

// @ts-ignore
const gun = Gun(["https://shadow-link.tk/gun"]);
const user = gun.user();

gun.on("auth", async (r) => {
  // const alias = await user.get("alias");
  // console.log(`Signed in as ${alias}`);
});

// attaching gun to window for testing purposes
window.gun = gun;
window.user = user;

export { user as gunUser, gun as default };
