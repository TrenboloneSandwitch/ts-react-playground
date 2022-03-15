import { ActionType } from "../action-types";

interface SearchRepAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepAction
  | SearchRepSuccessAction
  | SearchRepErrorAction;
