import React from "react";

const AccountHeader: React.FC = () => {
  return (
    <div className="bg-white py-4 px-4 border-b">
      <div className="text-xl font-semibold">Chirag</div>
      <div className="text-gray-600 text-sm">📞 xxxxxxxxxx</div>
      <div className="mt-3 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md text-sm cursor-pointer">
        🎂 Add your birthday - <span className="underline">Enter details</span>
      </div>
    </div>
  );
};

export default AccountHeader;
