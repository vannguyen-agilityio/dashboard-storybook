import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import {
  Input,
  Box,
} from '@chakra-ui/react';

// Component for Global Search
export const Search = ({ globalSearch, setGlobalSearch }) => {
  const [value, setValue] = useState(globalSearch);

  const onChange = useAsyncDebounce((value) => {
    setGlobalSearch(value || undefined);
  }, 100);

  return (
    <Box>
      <Input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search value"
        _placeholder={{ color: 'default.placeholder' }}
        h={12}
        size="md"
        focusBorderColor='secondary.100'
      />
    </Box>
  );
}

// Component for Default Column Search
export const DefaultSearchForColumn = ({
  column: {
    searchValue,
    preFilteredRows: { length },
    setSearch,
    id
  },
}) => {
  return (
    (id !== "email" && id !== "userName" && id !== "actions")  &&
    <Input
      value={searchValue || ""}
      onChange={(e) => {
        // Set undefined to remove the search entirely
        setSearch(e.target.value || undefined);
      }}
      placeholder={`Search ${length} records..`}
      mt={5}
    />
  );
}
