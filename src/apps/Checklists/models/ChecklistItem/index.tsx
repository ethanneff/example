import { createSelector } from "reselect";
import { ActionType, createAction, getType } from "typesafe-actions";
import { RootAction, RootState } from "../../../../containers";
import { getCurrentChecklist } from "../Checklist";

/* ACTIONS */
export const createItem = createAction("checklistItem/create")<ChecklistItem>();
export const updateItem = createAction("checklistItem/update")<UpdateItem>();
export const removeItem = createAction("checklistItem/remove")<string>();
export const toggleCompleteItem = createAction("checklistItem/toggleComplete")<
  string
>();

/* SELECTORS */
export const getItems = (state: RootState): ChecklistItems =>
  state.checklistItems.items;
export const getCurrentActiveChecklistItemsOrderByCreatedAt = createSelector(
  [getCurrentChecklist, getItems],
  (checklist, items) =>
    Object.values(items)
      .filter(item => item.checklistId === checklist.id && item.active)
      .sort((a, b) => a.createdAt - b.createdAt)
);

/* INTERFACES */
export type ChecklistItemReducer = {
  active: string | undefined;
  items: ChecklistItems;
};
export type ChecklistItem = {
  id: string;
  name: string;
  checklistId: string;
  description?: string;
  completed: boolean;
  active: boolean;
  userId: string;
  // sources?: string[]; // TODO: move into other reducer
  order?: number;
  createdAt: number;
  updatedAt: number;
};
export type ChecklistItems = { [key: string]: ChecklistItem };
export type ItemActions = ActionType<
  | typeof createItem
  | typeof removeItem
  | typeof updateItem
  | typeof toggleCompleteItem
>;
interface CreateItem {
  name: string;
  description?: string;
  active?: boolean;
}
type UpdateItem = CreateItem & { id: string };

/* REDUCER */
const initialState: ChecklistItemReducer = {
  active: undefined,
  items: {}
};
export const checklistItemReducer = (
  state: ChecklistItemReducer = initialState,
  action: RootAction
): ChecklistItemReducer => {
  switch (action.type) {
    case getType(createItem):
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: action.payload
        }
      };
    case getType(updateItem):
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            ...action.payload,
            updatedAt: Date.now()
          }
        }
      };
    case getType(removeItem):
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            active: false,
            updatedAt: Date.now()
          }
        }
      };
    case getType(toggleCompleteItem):
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            completed: !state.items[action.payload].completed,
            updatedAt: Date.now()
          }
        }
      };
    default:
      return state;
  }
};