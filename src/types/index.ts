export interface Action {
  type: string;
}

export interface State extends Action {
  [x: string]: any;
}
