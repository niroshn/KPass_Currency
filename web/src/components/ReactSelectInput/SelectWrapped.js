import React from 'react';
import Select from 'react-select';
import Option from './Option';

const ITEM_HEIGHT = 40;

const customStyles = {
  control: () => ({
    display: 'flex',
    alignItems: 'center',
    border: 0,
    height: 'auto',
    background: 'transparent',
    '&:hover': {
      boxShadow: 'none'
    }
  }),
  menu: () => ({
    backgroundColor: 'white',
    boxShadow: '1px 2px 6px #888888', // should be changed as material-ui
    position: 'absolute',
    left: 0,
    top: `calc(100% + 1px)`,
    width: '100%',
    zIndex: 2,
    maxHeight: ITEM_HEIGHT * 4.5
  }),
  menuList: () => ({
    maxHeight: ITEM_HEIGHT * 4.5,
    overflowY: 'auto'
  })
};

export default function SelectWrapped(props) {
  const { classes, labelKey, valueKey, ...other } = props;
  if (valueKey && labelKey) {
    return (
      <Select
        isMulti
        getOptionLabel={option => option[labelKey]}
        getOptionValue={option => option[valueKey]}
        components={{
          Option
        }}
        styles={customStyles}
        isClearable
        {...other}
      />
    );
  }
  return (
    <Select
      isMulti
      components={{
        Option
      }}
      styles={customStyles}
      isClearable
      {...other}
    />
  );
}
