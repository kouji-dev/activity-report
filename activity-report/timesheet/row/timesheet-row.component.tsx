import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { projectByActivityReportIdSelector } from '../../../project/project.selectors';
import { useSheetColumns } from '../../../utils/date-utils';
import { Id } from '../../../utils/types';
import { TimesheetCell } from './timesheet-cell.component';
import { TimesheetRowTotal } from '../total/timesheet-row-total.component';

interface Props {
  activityReportId?: Id;
}

export const TimesheetRow: FC<Props> = (props) => {
  const { activityReportId } = props;
  const columns = useSheetColumns();
  return (
    <tr>
      <ProjectTD activityReportId={activityReportId} />
      {columns.map((col) => (
        <TimesheetCell
          key={`${col.day}-${activityReportId}`}
          {...col}
          activityReportId={activityReportId}
        />
      ))}
      <TimesheetRowTotal activityReportId={activityReportId} />
    </tr>
  );
};

export const ProjectTD: FC<{ activityReportId: Id }> = memo((props) => {
  const { activityReportId } = props;
  const project = useSelector(
    projectByActivityReportIdSelector(activityReportId)
  );

  if (!project) return <td>empty</td>;

  const { nom } = project;
  return (
    <td>
      <b>{nom}</b>
    </td>
  );
});
