export const addAction = (t: string, l: number) => {
  return { type: "ADD_DATA", payload: { id: l, title: t } };
};
