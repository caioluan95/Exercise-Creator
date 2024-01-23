import AvatarRounded from "@/core/components/avatar/avatar-rounded";

export default function UserPresentation() {
  return (
    <div className="pl-4 mb-6 flex items-center gap-4">
      <div className="bg-sky-100 rounded-lg flex items-center gap-4 p-2">
        <AvatarRounded />
        <div>
          <div className="font-semibold text-gray-900">
            <p>Admin</p>
          </div>
          <div className="text-sm text-gray-500">
            <p>admin@teacherlab.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
