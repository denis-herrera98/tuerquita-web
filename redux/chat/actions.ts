import { TYPES } from "../types";
import { ChatActions } from "./chatReducer";

export const changeChat = (msgTo: string) => {
  return {
    type: TYPES.CHANGE_CHAT,
    payload: msgTo,
  };
};

export const createConversation = (
  recipient: string,
  authorId: string
): ChatActions => {
  if (!recipient || !authorId)
    return {
      type: TYPES.CREATE_CHAT,
      payload: "",
    };

  return {
    type: TYPES.CREATE_CHAT,
    payload: `${authorId}-${recipient}`,
  };
};

export const addMessage = (msg: string, authorId: string): ChatActions => {
  return {
    type: TYPES.ADD_MSG,
    payload: "",
    newMessage: { msg, authorId },
  };
};

export const setCurrentRecipient = (msgTo: string): ChatActions => {
  return {
    type: TYPES.SET_CURRENT_RECIPIENT,
    payload: msgTo,
  };
};
