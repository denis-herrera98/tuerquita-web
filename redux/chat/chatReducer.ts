import { TYPES } from "../types";

export interface ChatState {
  activeChat: string;
  chats: Conversations[];
  currentRecipient: string;
  recipientName: string;
}

interface Conversations {
  chatId: string;
  auhorId: string;
  recipient: string;
  messages: Message[];
  newMessages: number;
}

export interface Message {
  msg: string;
  authorId: string;
  recipient: string;
}

const initialState: ChatState = {
  activeChat: "",
  currentRecipient: "",
  recipientName: "",
  chats: [],
};

export interface ChatActions {
  type: string;
  recipientName?: string;
  payload?: string;
  newMessage?: Message;
}

export const chatReducer = (
  state: ChatState = initialState,
  action: ChatActions
): ChatState => {
  switch (action.type) {
    case TYPES.SET_CURRENT_RECIPIENT: {
      const copy = [...state.chats];

      const currentConversation = copy.find((conversation) =>
        conversation.chatId.includes(action.payload)
      );

      currentConversation.newMessages = 0;

      return {
        ...state,
        chats: copy,
        currentRecipient: action.payload,
        activeChat: currentConversation.chatId,
        recipientName: action.recipientName,
      };
    }

    case TYPES.CREATE_CHAT: {
      if (!state.chats.find((value) => value.chatId === action.payload)) {
        const authorIdAndRecipientId = action.payload.split("-");

        state.chats.push({
          chatId: action.payload,
          messages: [],
          newMessages: 0,
          auhorId: authorIdAndRecipientId[0],
          recipient: authorIdAndRecipientId[1],
        });
      }

      return { ...state, activeChat: action.payload };
    }

    case TYPES.ADD_MSG: {
      const copy = [...state.chats];

      const conversation = copy.find(
        (conversation) =>
          conversation.chatId.includes(action.newMessage.authorId) &&
          conversation.chatId.includes(action.newMessage.recipient)
      );

      if (conversation) {
        conversation.messages.unshift(action.newMessage);

        if (
          conversation.auhorId === action.newMessage.recipient &&
          state.currentRecipient !== action.newMessage.recipient &&
          state.currentRecipient !== action.newMessage.authorId
        ) {
          conversation.newMessages++;
        }

        return {
          ...state,
          chats: copy,
        };
      }

      return { ...state };
    }

    case TYPES.CLEAN_CHAT: {
      if (state.currentRecipient === action.payload) {
        return {
          ...state,
          activeChat: "",
          currentRecipient: "",
          recipientName: "",
        };
      }

      return { ...state };
    }

    case TYPES.RESET_CHAT_REDUCER: {
      return {
        ...state,
        activeChat: "",
        currentRecipient: "",
        recipientName: "",
        chats: [],
      };
    }

    default: {
      return { ...state };
    }
  }
};
