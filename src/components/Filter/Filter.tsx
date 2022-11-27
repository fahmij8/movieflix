import { Dispatch, useState } from "react";
import { Select } from "components/Global/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

interface FilterContentProps {
  handleClose: () => void;
  setSearchQuery: Dispatch<React.SetStateAction<any>>;
}

export const FilterContent = ({
  handleClose,
  setSearchQuery
}: FilterContentProps) => {
  const [filterValues, setFilterValues] = useState({
    year: "",
    type: ""
  });

  const handleFilterChange = () => {
    setSearchQuery((prev: any) => ({
      ...prev,
      y: filterValues.year,
      type: filterValues.type
    }));
    setFilterValues({
      year: "",
      type: ""
    });
    handleClose();
  };

  return (
    <>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="filter-year"
          label="Year"
          type="number"
          fullWidth
          onChange={(e) =>
            setFilterValues({ ...filterValues, year: e.target.value })
          }
          value={filterValues.year}
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth>
          <Select
            {...{
              selectProps: {
                id: "filter-type",
                labelId: "filter-type",
                label: "Type",
                value: filterValues.type,
                onChange: (e) =>
                  setFilterValues({
                    ...filterValues,
                    type: e.target.value as string
                  })
              },
              selectItems: [
                { value: "movie", label: "Movie" },
                { value: "series", label: "Series" },
                { value: "episode", label: "Episode" }
              ],
              label: "Type"
            }}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleFilterChange}>Filter</Button>
      </DialogActions>
    </>
  );
};
