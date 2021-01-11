import { CREATE_EVENT } from "./types";

export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: { ...event, author: "Anonymous", create_at: new Date() },
  };
};
