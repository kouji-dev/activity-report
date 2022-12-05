import React, {
  createContext,
  useState,
  useContext,
  FC,
  PropsWithChildren,
} from 'react';
import produce from 'immer';

const TimesheetCellSelectionContext = createContext(null);

const useTimesheetCellSelection = () => {
  const [selection, setSelection] = useState({});

  return [selection];
};

export const TimesheetCellSelectionProvider: FC<PropsWithChildren<{}>> = (
  props
) => {
  const { children } = props;
  const [selection] = useTimesheetCellSelection();
  return (
    <TimesheetCellSelectionContext.Provider value={{ selection }}>
      {children}
    </TimesheetCellSelectionContext.Provider>
  );
};

export const useTimesheetCellSelectionContext = () => {
  const ctx = useContext(TimesheetCellSelectionContext);

  if (!ctx)
    console.log(
      `TimesheetCellSelectionContext is available only under parent TimesheetBody`
    );

  return ctx;
};
