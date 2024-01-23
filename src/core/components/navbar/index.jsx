import DrawerDefault from "@/core/components/drawer";
import InputSearch from "@/core/components/form/inputs/input-search";
import AvatarRounded from "@/core/components/avatar/avatar-rounded";

export default function Navbar() {
  return (
    <main>
      <nav className="fixed top-0 z-40 w-screen bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="pr-10 sm:pr-0">
                <DrawerDefault />
              </div>

              <div className="flex justify-between pl:20 sm:pl-40">
                <div>
                  <InputSearch />
                </div>
              </div>
            </div>
            <div className="flex items-center pr-4">
              <div className="flex items-center ms-3">
                <div>
                  <AvatarRounded />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
