function _getWeekStatus(weeks, weekInfo, profile) {
  var reportStatus = false;
  var myReport = null;

  weeks.map(function (week) {
    if (profile.name === week.name && week.report) {
      reportStatus = true;
      myReport = week.report;
    }
  })

  weekInfo.reportStatus = reportStatus;
  weekInfo.myReport = myReport;

  return weekInfo;
}

export default _getWeekStatus;
