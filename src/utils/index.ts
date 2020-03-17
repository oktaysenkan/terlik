import moment from "moment";

export const prettier = (object: object) => JSON.stringify(object, null, 2);
export const currentTime = () => moment().format("HH:mm:ss:SSS");
