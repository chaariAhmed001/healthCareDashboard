import React, { useContext } from "react";
import { appContext } from "../Context/appContext.js";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links, settingsIcon, todayPatientsButtons } from "../Data/data.js";

const Icon = ({ text, icon }) => {
  return (
    <TooltipComponent position="BottomCenter" content={text}>
      <div className="flex items-center gap-1 hover:cursor-pointer hover:text-white hover:bg-secondary-color/[75%] p-1 rounded-full">
        <div>{icon}</div>
      </div>
    </TooltipComponent>
  );
};

const PatientChat = () => {
  const { conversationDetails } = useContext(appContext);

  return (
    <div className="flex flex-warp flex-col h-[520px] rounded-xl mt-2 w-[72%] ml-0 md:ml-2 bg-white drop-shadow-md">
      {/* conversation header */}
      <div className="h-14 w-full bg-main-bg rounded-t-xl flex justify-between items-center">
        <div className="flex gap-2 ml-2">
          <div className="w-8 h-8">
            <img
              src={conversationDetails?.image}
              alt={conversationDetails?.name}
            />
          </div>
          <div className="font-bold mt-1">
            <span className="font-light text-gray-400">Conversation with </span>
            {conversationDetails?.name}
          </div>
        </div>
        <div className="flex items-center mr-2 text-secondary-color text-sm">
          <Icon text="Schedule an appointment" icon={links?.[1]?.icon} />
          <Icon text="Patient profil" icon={todayPatientsButtons?.[0]?.icon} />
          <Icon text="Settings" icon={settingsIcon} />
        </div>
      </div>
    </div>
  );
};

export default PatientChat;
