import React, { FC, memo, PointerEventHandler } from 'react';
import { Id } from '../../../../utils/types';
import { useTimesheetSelectionData } from './timesheet-selection.context';
import cls from 'classnames';

interface Props {
  activityReportId: Id;
  day: string;
}

export const TimesheetCellSelectionLayer: FC<Props> = memo((props) => {
  const { activityReportId, day } = props;
  const ctx = useTimesheetSelectionData(activityReportId, day);

  const className = cls('cell-selection-layer', {
    'cell-selected': false,
  });

  const onPointerDown: PointerEventHandler<HTMLDivElement> = (ev) => {
    console.log({
      source: 'down',
      ev,
    });
  };

  const onPointerMove: PointerEventHandler<HTMLDivElement> = (ev) => {
    console.log({
      source: 'move',
      ev,
    });
  };

  const onPointerUp: PointerEventHandler<HTMLDivElement> = (ev) => {
    console.log({
      source: 'up',
      ev,
    });
  };

  const onPointerCancel: PointerEventHandler<HTMLDivElement> = (ev) => {
    console.log({
      source: 'cancel',
      ev,
    });
  };

  const onPointerCancelCapture: PointerEventHandler<HTMLDivElement> = (ev) => {
    console.log({
      source: 'cancel capture',
      ev,
    });
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onPointerCancelCapture={onPointerCancelCapture}
      className={className}
    />
  );
});
