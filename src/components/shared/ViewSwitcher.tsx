import classNames from "classnames";
import { GridViewIcon } from "../../assets/GridViewIcon";
import { TableViewIcon } from "../../assets/TableViewIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export function ViewSwitcher({
  isInTabelView,
  handleViewSwitcher,
}: {
  isInTabelView: boolean;
  handleViewSwitcher: (data: boolean) => void;
}) {
  const gridStyles = classNames("size-6 text-primary-200 cursor-pointer", {
    "text-tertiary-400 size-8": !isInTabelView,
  });
  const tableStyles = classNames("size-6 text-primary-200 cursor-pointer", {
    "text-tertiary-400 size-8": isInTabelView,
  });
  return (
    <div className="flex justify-end px-5">
      <div className="flex px-3 py-1">
        <div onClick={() => handleViewSwitcher(true)}>
          <Tooltip title="Table View">
            <IconButton>
              <TableViewIcon className={tableStyles} />
            </IconButton>
          </Tooltip>
        </div>
        <div onClick={() => handleViewSwitcher(false)}>
          <Tooltip title="Grid View">
            <IconButton>
              <GridViewIcon className={gridStyles} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
