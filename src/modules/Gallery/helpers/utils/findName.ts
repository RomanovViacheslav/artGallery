import { SelectEntity } from '../../../../domains';

export const getName = (authorId: string, data: SelectEntity[]): string => {
  const filterData = data.find((elem) => elem.id === authorId);
  return filterData ? filterData.name : 'Unknown';
};
