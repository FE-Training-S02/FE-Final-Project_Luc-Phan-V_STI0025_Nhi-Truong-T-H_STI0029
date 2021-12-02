import moment from "moment";

export const convertDateFromNow = (value) => {
  let time = moment(value).utc();
  return moment(time, "YYYYMMDD").fromNow();
}
