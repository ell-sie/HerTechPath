import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  MenuItem,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import { Dispatch, SetStateAction, useState } from "react";
import "swiper/css";
import { Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Path, type DeletePathInput } from "../../API";
import ArrowIcon from "../../assets/ArrowIcon";
import BuildingIcon from "../../assets/BuildingIcon";
import EditIcon from "../../assets/EditIcon";
import MenuAnchorElementProvider from "../../providers/MenuAnchorElementProvider";
import DeleteOption from "../DeleteOptions";
import MenuOption from "./MenuOption";

interface PathCardProps extends Path {
  handlers: {
    handleSetDefaultClient: (id: string) => void;
    handleDelete: (data: DeletePathInput) => void;
    handleSetUpdate: Dispatch<SetStateAction<boolean>>;
  };
  deletingPath: DeletePathInput | null;
}

export default function PathCard({
  id,
  name,
  description,
  Resources,
  handlers,
  deletingPath,
}: PathCardProps) {
  const [isAccordionExpanded, setAccordionExpanded] = useState(false);

  return (
    <Card
      className={classNames(
        "h-fit rounded-lg border border-slate-900 bg-black p-6",
        {
          "animate-pulse": id.length < 6 || deletingPath?.id === id,
        }
      )}
    >
      <Typography
        className="mb-5 flex items-center justify-between"
        noWrap
        component="div"
      >
        <BuildingIcon className="size-10" />
        <MenuAnchorElementProvider>
          <MenuOption>
            <MenuItem
              sx={{ color: "#585858" }}
              onClick={() => {
                handlers.handleSetDefaultClient(id);
                handlers.handleSetUpdate(true);
              }}
              className="flex gap-2"
            >
              <EditIcon className="size-5" />
              Edit
            </MenuItem>
            <DeleteOption
              alertText="Are you sure you want to delete this Client?"
              payload={{ id }}
              handleDelete={handlers.handleDelete}
            />
          </MenuOption>
        </MenuAnchorElementProvider>
      </Typography>
      <div className="flex flex-col overflow-hidden">
        <Accordion className="h-fit w-full" expanded={isAccordionExpanded}>
          <AccordionSummary
            sx={{
              ".MuiAccordionSummary-content": {
                margin: "0px",
                display: "grid",
                gap: "10px",
              },
              padding: "0px",
            }}
            expandIcon={
              <div
                className="relative rotate-180"
                onClick={() => setAccordionExpanded((prevstate) => !prevstate)}
              >
                <ArrowIcon className="size-6 rotate-90 text-white" />
              </div>
            }
          >
            <div className="w-full text-xl font-bold text-white">
              {name}
            </div>
            <div className="flex gap-1 overflow-x-auto text-sm">
              <div>Projects:</div>
              <Swiper
                modules={[Scrollbar, Mousewheel]}
                spaceBetween={5}
                slidesPerView={"auto"}
                className="flex-10 block w-full"
                mousewheel={true}
              >
                {Resources?.items.map((resource) => (
                  <SwiperSlide
                    key={resource?.id}
                    className="size-fit rounded-full px-3 py-1 text-xs text-white bg-black"
                  >
                    {resource?.title}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{ padding: "0px", border: "none" }}
            className="grid grid-cols-2 gap-2 border text-xs font-semibold"
          >
            <span>
              Path:{" "}
              <span className="font-normal">{name || "Unknown"}</span>
            </span>
            <span>
              Description: <span className="font-normal">{description}</span>
            </span>
          </AccordionDetails>
        </Accordion>
      </div>
    </Card>
  );
}
