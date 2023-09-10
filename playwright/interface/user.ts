import { creden } from "./login";

export interface User {
    displayName: string,
    credential: creden
}

export interface InvalidUser {
    displayName: string,
    credential: creden,
    errorMessage: string
}