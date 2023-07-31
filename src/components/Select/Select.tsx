import { Typography } from '@mui/material';
import React, { memo } from 'react';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import { InputBase } from '../InputBase';
import {
  StyledFormControl,
  StyledIconWrapper,
  StyledMenuItem,
  StyledSelect,
} from './Select.styled';
import { ArrowSelectIcon, ExitIcon } from '../../ui/icons';
import { SelectProps } from './Select.types';
import { InputYear } from '../InputYear';

export const Select = memo(
  ({
    isCreated,
    value,
    onChange,
    data,
    name,
    onClear,
    onInputChange,
    defaultValue,
    ...props
  }: SelectProps) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleClearSelect = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (onClear) {
        onClear();
      }
    };

    const theme = useTheme();

    console.log(theme);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <StyledFormControl variant="standard">
        <StyledSelect
          {...props}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          value={value}
          onChange={onChange}
          inputProps={{ 'aria-label': name }}
          input={<InputBase />}
          displayEmpty
          IconComponent={ArrowSelectIcon}
          renderValue={(selected) => {
            if (Array.isArray(selected)) {
              return name;
            }
            if (typeof selected === 'string' && selected) {
              const selectedElem = data?.find((elem) => elem.id === selected);
              return (
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography>{selectedElem?.name}</Typography>
                  <StyledIconWrapper onMouseDown={handleClearSelect}>
                    <ExitIcon />
                  </StyledIconWrapper>
                </Box>
              );
            }
            return <Typography>{name}</Typography>;
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: 'primary.main',
                border: '1px solid',
                borderColor: 'primary.dark',
                borderRadius: '0',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                maxHeight: '350px',
                borderTopColor: 'text.disabled',
                borderTop: isCreated ? 'none' : '',
                boxShadow: 'none',
                width: '0px',
                overflowX: 'auto',
                '& ul': {
                  width: '100%',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                },
              },
            },
          }}
        >
          {!isCreated ? (
            data?.map((elem) => (
              <StyledMenuItem key={elem.id} value={elem.id}>
                {elem.name}
              </StyledMenuItem>
            ))
          ) : (
            <InputYear
              value={value as string[]}
              onChange={onInputChange}
              defaultValue={defaultValue as string[]}
            />
          )}
        </StyledSelect>
      </StyledFormControl>
    );
  },
);
