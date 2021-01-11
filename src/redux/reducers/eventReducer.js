/* eslint-disable import/no-anonymous-default-export */
import { CREATE_EVENT } from "../actions/types";

const INITIAL_STATE = [
  {
    title: "Meeting with CEO",
    location: "Senayan City Hotel",
    participants: [
      {
        name: "John Doe",
        avatar:
          "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/d9/0d98cbc7-0408-518e-a67d-50ba01ca1bfa/5f120523682a4.image.jpg",
      },
      {
        name: "John Doe",
        avatar:
          "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/d9/0d98cbc7-0408-518e-a67d-50ba01ca1bfa/5f120523682a4.image.jpg",
      },
      {
        name: "John Doe",
        avatar:
          "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/d9/0d98cbc7-0408-518e-a67d-50ba01ca1bfa/5f120523682a4.image.jpg",
      },
      {
        name: "John Doe",
        avatar:
          "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/d9/0d98cbc7-0408-518e-a67d-50ba01ca1bfa/5f120523682a4.image.jpg",
      },
      {
        name: "John Doe",
        avatar:
          "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/d9/0d98cbc7-0408-518e-a67d-50ba01ca1bfa/5f120523682a4.image.jpg",
      },
      {
        name: "John Doe",
        avatar:
          "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/d9/0d98cbc7-0408-518e-a67d-50ba01ca1bfa/5f120523682a4.image.jpg",
      },
      {
        name: "John Doe",
        avatar:
          "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/d9/0d98cbc7-0408-518e-a67d-50ba01ca1bfa/5f120523682a4.image.jpg",
      },
    ],
    notes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    datetime: {
      start: new Date().setHours(new Date().getHours() - 6),
      finish: new Date().setHours(new Date().getHours() + 4),
    },
    author: "Jessica Jones",
    create_at: new Date().setHours(new Date().getHours() - 6),
  },
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
