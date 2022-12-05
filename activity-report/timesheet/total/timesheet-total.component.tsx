import React, { FC } from 'react';
import { useSelector } from 'react-redux';

interface Props {}

export const TimesheetTotal: FC<Props> = () => {
  const total = 0;
  return <td>{total}</td>;
};
