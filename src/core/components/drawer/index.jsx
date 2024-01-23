"use client";
import React from "react";
import Sidebar from "@/core/components/sidebar";
import { Drawer, Button } from "@material-tailwind/react";
import Logo from "@/core/components/logo";
import UserPresentation from "@/core/components/user-presentation";
import Li from "@/core/components/lists/li";
import Ul from "@/core/components/lists/ul";
import {
  FaHouseChimneyUser,
  FaRegFolderOpen,
  FaRegPenToSquare,
  FaPencil,
} from "react-icons/fa6";

export default function DrawerDefault() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <React.Fragment>
        <Button
          onClick={openDrawer}
          className={`bg-blue-500 p-2 w-32 rounded-md text-white shadow-md cursor-pointer`}
        >
          Menu
        </Button>
        <Drawer open={open} onClose={closeDrawer} className="z-50 w-60">
          <aside
            id="logo-sidebar"
            className="ml-60 p-1 z-50 w-64 h-screen pt-6 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="pl-16 mb-8">
              <Logo />
            </div>

            <div>
              <UserPresentation />
            </div>

            <div className="h-full px-3 pb-4 overflow-y-auto">
              <Ul className="space-y-2 font-medium">
                <Li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-500 hover:bg-blue-100 hover:text-blue-700 hover:font-semibold"
                  >
                    <FaHouseChimneyUser />
                    <span className="flex-1 ms-3">Início</span>
                  </a>
                </Li>
                <Li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-500 hover:bg-blue-100 hover:text-blue-700 hover:font-semibold"
                  >
                    <FaRegFolderOpen />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Disciplinas
                    </span>
                  </a>
                </Li>
                <Li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-500 hover:bg-blue-100 hover:text-blue-700 hover:font-semibold"
                  >
                    <FaRegPenToSquare />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Questões
                    </span>
                  </a>
                </Li>
                <Li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-500 hover:bg-blue-100 hover:text-blue-700 hover:font-semibold"
                  >
                    <FaPencil />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Provas
                    </span>
                  </a>
                </Li>
              </Ul>
            </div>
          </aside>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
