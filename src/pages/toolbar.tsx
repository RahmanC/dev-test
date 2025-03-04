import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { API, Repo, Tab, Webhook } from "../components/toolbar";
import { Icon } from "@iconify/react";

type TabType = "webhook" | "repositories" | "api" | "share";

export const Toolbar = () => {
  const [activeTab, setActiveTab] = useState<TabType>("webhook");

  return (
    <motion.div
      layout
      className="bg-white rounded-[18px] p-2.5 shadow-[0px_8px_16px_0px_#0000000A,0px_4px_8px_0px_#0000000A,0px_0px_0px_1px_#09090B0D] w-full max-w-md"
    >
      <AnimatePresence mode="wait">
        {activeTab === "webhook" && <Webhook key="webhook" />}
        {activeTab === "repositories" && <Repo key="repositories" />}
        {activeTab === "api" && <API key="api" />}
        {activeTab === "share" && <>share</>}
      </AnimatePresence>

      <div className="flex items-center gap-1 justify-between mt-2.5">
        <div className="overflow-x-auto w-[90%]">
          <div className="flex gap-2 min-w-max">
            <Tab
              isActive={activeTab === "webhook"}
              onClick={() => setActiveTab("webhook")}
            >
              Create webhook
            </Tab>
            <Tab
              isActive={activeTab === "repositories"}
              onClick={() => setActiveTab("repositories")}
            >
              Connect repositories
            </Tab>
            <Tab
              isActive={activeTab === "api"}
              onClick={() => setActiveTab("api")}
            >
              Create API key
            </Tab>
            <Tab
              isActive={activeTab === "share"}
              onClick={() => setActiveTab("share")}
            >
              Share workspace
            </Tab>
          </div>
        </div>
        <Icon
          icon="material-symbols:menu-rounded"
          className="flex flex-1 w-5 h-5 text-[#737373] ps-3 border-l border-[#E5E5E5]"
        />
      </div>
    </motion.div>
  );
};
