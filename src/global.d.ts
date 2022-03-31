/// <reference types="svelte" />
/// <reference types="GUN" />
/// <reference path="@types/chrome"/>
/// <reference path="gun/types"/>
/// <reference path="svelte-writable-derived"/>
import type { IGunInstance, IGunUserInstance } from "gun/types";

declare global {
    interface Window {
        gun:IGunInstance;
        user:IGunUserInstance;
    }
}