import { Typography } from 'antd';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Id } from '../../utils/types';
import { activitySelector } from '../activity-report-sheet.selectors';
import { HeadCol } from './timesheet-head.component';

interface Props extends HeadCol {
  activityReportId?: Id;
}

export const TimesheetCell: FC<Props> = (props) => {
  const { isDisabled, isHoliday, isWeekend, activityReportId, day } = props;
  const cell = {};

  if (isDisabled) return <DisabledTimesheetCell />;
  if (isHoliday) return <HolidayTimesheetCell />;
  if (isWeekend) return <WeekendTimesheetCell />;

  if (!cell) return <td></td>;

  return (
    <td>
      <Typography.Text code>1</Typography.Text>
    </td>
  );
};

const DisabledTimesheetCell = memo(() => {
  return (
    <td>
      <Typography.Text>D</Typography.Text>
    </td>
  );
});

const HolidayTimesheetCell = memo(() => {
  return (
    <td>
      <Typography.Text>H</Typography.Text>
    </td>
  );
});

const WeekendTimesheetCell = memo(() => {
  return (
    <td>
      <Typography.Text>
        <small>W</small>
      </Typography.Text>
    </td>
  );
});
