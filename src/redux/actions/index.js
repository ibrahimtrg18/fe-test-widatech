import { CREATE_EVENT } from "./types";

export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: { ...event, create_at: new Date() },
  };
};
