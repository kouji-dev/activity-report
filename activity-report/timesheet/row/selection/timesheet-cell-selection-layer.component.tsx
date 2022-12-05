import React, { FC, memo } from 'react';
import { Id } from '../../../../utils/types';
import { useTimesheetCellSelectionContext } from './timesheet-cell-selection.context';

interface Props {
  activityReportId: Id;
  day: string;
}

export const TimesheetCellSelectionLayer: FC<Props> = memo(() => {
  const { selection } = useTimesheetCellSelectionContext();
  console.log({
    selection,
  });
  return <div className="cell-selection-layer" />;
});
