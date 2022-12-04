import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Id } from '../../utils/types';
import { sheetRowTotal } from '../activity-report-sheet.selectors';

interface Props {
  activityReportId: Id;
}

export const TimesheetRowTotal: FC<Props> = (props) => {
  const { activityReportId } = props;
  const total = useSelector(sheetRowTotal(activityReportId));
  return <td>{total}</td>;
};
