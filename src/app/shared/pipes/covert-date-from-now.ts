import moment from "moment";

export const convertDateFromNow = (value) => {
  return moment(value, "YYYYMMDD").fromNow();
}
