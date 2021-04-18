import { TYPES } from "../types";
import { ChatActions, Message } from "./chatReducer";

export const changeChat = (msgTo: string): ChatActions => {
  return {
    type: TYPES.CHANGE_CHAT,
    payload: msgTo,
  };
};

export const createConversation = (
  recipient: string,
  authorId: string
): ChatActions => {
  return {
    type: TYPES.CREATE_CHAT,
    payload: `${authorId}-${recipient}`,
  };
};

export const addMessage = ({
  msg,
  authorId,
  recipient,
}: Message): ChatActions => {
  return {
    type: TYPES.ADD_MSG,
    payload: "",
    newMessage: { msg, authorId, recipient },
  };
};

export const setCurrentRecipient = (
  msgTo: string,
  name: string
): ChatActions => {
  return {
    type: TYPES.SET_CURRENT_RECIPIENT,
    payload: msgTo,
    recipientName: name,
  };
};

export const cleanChat = (currentRecipient: string): ChatActions => {
  return {
    type: TYPES.CLEAN_CHAT,
    payload: currentRecipient,
  };
};
