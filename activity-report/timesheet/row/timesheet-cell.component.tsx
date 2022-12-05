import { Typography } from 'antd';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Id } from '../../../utils/types';
import { activitySelector } from '../../activity-report-sheet.selectors';
import { HeadCol } from '../head/timesheet-head.component';
import { TimesheetCellSelectionLayer } from './selection/timesheet-cell-selection-layer.component';
import cls from 'classnames';

interface Props extends HeadCol {
  activityReportId?: Id;
}

export const TimesheetCell: FC<Props> = (props) => {
  const { isDisabled, isHoliday, isWeekend, activityReportId, day } = props;
  const cell = useSelector(activitySelector(activityReportId, day));

  if (isDisabled) return <DisabledTimesheetCell />;
  if (isHoliday) return <HolidayTimesheetCell />;
  if (isWeekend) return <WeekendTimesheetCell />;

  const className = cls({
    cell: !!cell,
    'empty-cell': !cell,
  });

  if (!cell) return <td className={className}></td>;

  return (
    <td className={className}>
      <Typography.Text code>1</Typography.Text>
      <TimesheetCellSelectionLayer
        activityReportId={activityReportId}
        day={day}
      />
    </td>
  );
};

const DisabledTimesheetCell = memo(() => {
  const className = cls('cell', 'cell-disabled');
  return (
    <td className={className}>
      <Typography.Text>D</Typography.Text>
    </td>
  );
});

const HolidayTimesheetCell = memo(() => {
  const className = cls('cell', 'cell-holiday');
  return (
    <td className={className}>
      <Typography.Text>H</Typography.Text>
    </td>
  );
});

const WeekendTimesheetCell = memo(() => {
  const className = cls('cell', 'cell-weekend');
  return (
    <td className={className}>
      <Typography.Text>
        <small>W</small>
      </Typography.Text>
    </td>
  );
});
