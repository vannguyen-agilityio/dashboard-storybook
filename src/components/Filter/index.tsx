import { useMemo } from "react";
import {
  Select,
} from '@chakra-ui/react';


// Component for Custom Select Filter
export function Filter ({
  column: { filterValue, setFilter, preFilteredRows, id, header},
}) {
  // Use preFilteredRows to calculate the options
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);
  
  // UI for Multi-Select box
  return (
    <Select
      value={filterValue}
      variant='outline'
      placeholder={`Select ${header}`}
      color='default.grey.500'
      minW="150px"
      h={14}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option: readonly string[], i) => {
      return (
        <option key={i} value={option}>
          {option}
        </option>
      )})}
    </Select>
  )
}
