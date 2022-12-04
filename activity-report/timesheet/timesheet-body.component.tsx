import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { Id } from '../../utils/types';
import { activityReportIdsSelector } from '../activity-report-sheet.selectors';
import { TimesheetRow } from './timesheet-row.component';

interface Props {}

export const TimesheetBody: FC<Props> = (props) => {
  const activityReports = useSelector<IRootState, Id[]>(
    activityReportIdsSelector
  );

  return (
    <tbody>
      {activityReports.map((activityReportId) => (
        <TimesheetRow
          key={activityReportId}
          activityReportId={activityReportId}
        />
      ))}
    </tbody>
  );
};
