import { REGISTRATION } from "./types";

export function registrationDataSubmit(data) {
    return {
        type: REGISTRATION.DATA_SUBMIT,
        payload: data
    }
}