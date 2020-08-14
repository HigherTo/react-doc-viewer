import { IDocument } from "../../types";
import {
  DocumentActions,
  NEXT_DOCUMENT,
  PREVIOUS_DOCUMENT,
  SetAllDocuments,
  SET_ALL_DOCUMENTS,
  UpdateCurrentDocument,
  UPDATE_CURRENT_DOCUMENT,
} from "./actions";

export type MainState = {
  currentFileNo: number;
  documents: IDocument[];
  currentDocument?: IDocument;
};

export const initialState: MainState = {
  currentFileNo: 0,
  documents: [],
  currentDocument: undefined,
};

export const reducer = (
  state = initialState,
  action: DocumentActions
): MainState => {
  switch (action.type) {
    case SET_ALL_DOCUMENTS: {
      const { documents } = action as SetAllDocuments;
      return { ...state, documents, currentDocument: documents[0] || null };
    }

    case NEXT_DOCUMENT: {
      const nextDocumentNo = state.currentFileNo + 1;
      return {
        ...state,
        currentFileNo: nextDocumentNo,
        currentDocument: state.documents[nextDocumentNo],
      };
    }

    case PREVIOUS_DOCUMENT: {
      const prevDocumentNo = state.currentFileNo - 1;
      return {
        ...state,
        currentFileNo: state.currentFileNo - 1,
        currentDocument: state.documents[prevDocumentNo],
      };
    }

    case UPDATE_CURRENT_DOCUMENT: {
      const { document } = action as UpdateCurrentDocument;
      return {
        ...state,
        currentDocument: document,
      };
    }

    default:
      return state;
  }
};
