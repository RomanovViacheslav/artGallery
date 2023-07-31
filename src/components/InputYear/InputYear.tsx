import React, { memo, useState } from 'react';
import { StyledSelectWrapper, StyledSeparator, StyledYearInput } from './InputYear.styled';
import { Separator } from '../../ui/icons';
import { InputYearProps } from './InputYear.types';

export const InputYear = memo(
  ({ onChange, defaultValue, value = defaultValue }: InputYearProps) => {
    const [fromValue, setFromValue] = useState(value[0]);
    const [beforeValue, setBeforeValue] = useState(value[1]);

    const handleFromInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.toString().length <= 4) {
        const inputValue = event.target.value;
        setFromValue(inputValue);
        if (onChange) {
          onChange([inputValue, beforeValue]);
        }
      }
    };

    const handleBeforeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.toString().length <= 4) {
        const inputValue = event.target.value;
        setBeforeValue(inputValue);
        if (onChange) {
          onChange([fromValue, inputValue]);
        }
      }
    };

    return (
      <StyledSelectWrapper>
        <StyledYearInput
          type="number"
          placeholder="from"
          value={fromValue}
          onChange={handleFromInputChange}
        />
        <StyledSeparator>
          <Separator />
        </StyledSeparator>
        <StyledYearInput
          type="number"
          placeholder="before"
          value={beforeValue}
          onChange={handleBeforeInputChange}
        />
      </StyledSelectWrapper>
    );
  },
);
