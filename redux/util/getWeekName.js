import moment from 'moment';

function _getWeekName(date) {
  var date = new Date(date);

  // weekOfMonth 설정
  var year = date.getFullYear();
  var month = date.getMonth();
  var first = new Date(year, month, 1).getDay() - 1;
  var weekOfMonth = Math.floor((first + date.getDate())/7) + 1;
  
  return (month+1) + "월" + weekOfMonth + "주";
}

export default _getWeekName;
