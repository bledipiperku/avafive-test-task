export const TAB_STATE = {
  DESCRIPTION: "des",
  RELATED: "related",
  REVIEWS: "reviews",
} as const;

export type TAB_STATE_TYPE = keyof typeof TAB_STATE;
