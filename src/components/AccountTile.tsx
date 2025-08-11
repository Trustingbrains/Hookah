import React from "react";

interface AccountTileProps {
  icon: string;
  label: string;
  route?: string;
  badge?: boolean;
}

const AccountTile: React.FC<AccountTileProps> = ({ icon, label, route, badge }) => {
  return (
    <div
      className="flex justify-between items-center py-3 border-b cursor-pointer hover:bg-gray-50 px-4"
      onClick={() => {
        if (route) window.location.href = route;
      }}
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt={label} className="h-5 w-5" />
        <span>{label}</span>
      </div>
      {badge && <span className="text-red-500 text-xs font-semibold">●</span>}
    </div>
  );
};

export default AccountTile;
