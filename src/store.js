import webextStorageAdapter from "svelte-webext-storage-adapter";
import writableDerived from "svelte-writable-derived";

var { stores, ready } = webextStorageAdapter(
  {
    pair: {},
    username: "",
    candidate_name: "",
    candidate_url: "",
    candidate_tags: [],
    candidate_notes: "",
  },
  {
    onSetError(error, setItems) {
      console.error("Error: ", error, "\n", "setItems: ", setItems);
    },
    storageArea: chrome.storage.local,
    live: true,
  }
);

var obj_db = Object.assign({}, stores, {
  key: writableDerived(
    stores.key,
    (json) => JSON.parse(json),
    (data) => JSON.stringify(data)
  ),
});

export { obj_db, ready, stores as default };
