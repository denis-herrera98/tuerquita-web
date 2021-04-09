import { TYPES } from "../types";

export interface ChatState {
  activeChat: string;
  chats: Conversations[];
  currentRecipient: string;
}

interface Conversations {
  chatId: string;
  messages: Message[];
}

export interface Message {
  msg: string;
  authorId: string;
  recipient: string;
}

const initialState: ChatState = {
  activeChat: "",
  currentRecipient: "",
  chats: [],
};

export interface ChatActions {
  type: string;
  payload: string;
  newMessage?: Message;
}

export const chatReducer = (
  state: ChatState = initialState,
  action: ChatActions
): ChatState => {
  switch (action.type) {
    case TYPES.SET_CURRENT_RECIPIENT: {
      const currentConversation = state.chats.find((conversation) =>
        conversation.chatId.includes(action.payload)
      )?.chatId;

      return {
        ...state,
        currentRecipient: action.payload,
        activeChat: currentConversation,
      };
    }

    case TYPES.CREATE_CHAT: {
      if (!action.payload) return { ...state };

      if (!state.chats.find((value) => value.chatId === action.payload)) {
        console.log("se creo una nueva conversacion", action.payload);
        state.chats.push({ chatId: action.payload, messages: [] });
      }

      return { ...state, activeChat: action.payload };
    }

    case TYPES.ADD_MSG: {
      const copy = [...state.chats];
      console.log("author", action.newMessage.authorId);

      copy
        .find(
          (conversation) =>
            conversation.chatId.includes(action.newMessage.authorId) &&
            conversation.chatId.includes(action.newMessage.recipient)
        )
        ?.messages.unshift(action.newMessage);

      return {
        ...state,
        chats: copy,
      };
    }

    default: {
      return { ...state };
    }
  }
};
