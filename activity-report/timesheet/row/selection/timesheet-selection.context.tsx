import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  FC,
  PropsWithChildren,
  useMemo,
} from 'react';
import produce from 'immer';
import { Id } from '../../../../utils/types';

type TimesheetSelectionData = {
  dragging: boolean;
  selection: { [key: string]: any };
};

type TimesheetSelectionApi = {
  select: (activityReportId: Id, day: string) => void;
};

type TimesheetSelectionContext = {
  api: TimesheetSelectionApi;
  data: TimesheetSelectionData;
};

const TimesheetSelectionContext =
  createContext<TimesheetSelectionContext>(null);

const useTimesheetCellSelection: () => TimesheetSelectionContext = () => {
  const [selection, setSelection] = useState({});
  const [dragging, setDragging] = useState(false);

  const select = useCallback((activityReportId: Id, day: string) => {}, []);

  return { data: { dragging, selection: {} }, api: { select } };
};

export const TimesheetSelectionProvider: FC<PropsWithChildren<{}>> = (
  props
) => {
  const { children } = props;
  const ctx = useTimesheetCellSelection();
  return (
    <TimesheetSelectionContext.Provider value={ctx}>
      {children}
    </TimesheetSelectionContext.Provider>
  );
};

export const useTimesheetSelectionData = (
  activityReportId: Id,
  day: string
) => {
  const ctx = useContext(TimesheetSelectionContext);

  if (!ctx)
    console.log(
      `TimesheetSelectionContext is available only under parent TimesheetBody`
    );
  return ctx;
};
