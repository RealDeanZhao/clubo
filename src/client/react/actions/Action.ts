export interface IAction<T> {
    type: string;
    payload: T;
}
export interface IActionCreator<T> {
    type: String,
    (payload: T): IAction<T>
}

export const actionCreator = <T>(type: String): IActionCreator<T> =>
    Object.assign((payload: T): any => ({ type, payload }), { type });

export const isType = <T>(action: IAction<any>, actionCreator: IActionCreator<T>):
    action is IAction<T> => action.type === actionCreator.type;