import React from "react";
import AccountHeader from "../components/AccountHeader";
import Section from "../components/Section";
import AccountTile from "../components/AccountTile";

// Icons from assets

import brightness from "../assets/brightness.png";
import wallet from "../assets/wallet.png";
import cardPayment from "../assets/card-payment.png";
import reward from "../assets/shopping-bag.png";
import share from "../assets/share.png";
import info from "../assets/info.png";
import padlock from "../assets/padlock.png";
import bellIcon from "../assets/bell.png";
import logout from "../assets/logout.png";
import heart from "../assets/heart.png";
import list from "../assets/list.png";
import contact from "../assets/contact.png";
import paperBag from "../assets/paper-bag.png";

// Temporary icon placeholder


const Account: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AccountHeader />

      {/* Quick Access Tiles */}
      <div className="grid grid-cols-3 gap-2 bg-white p-4">
        <div className="text-center text-sm font-medium text-gray-700">
          <img src={wallet} alt="Wallet" className="h-10 w-10 mx-auto mb-1" />
          Blinkit Money
        </div>
        <div className="text-center text-sm font-medium text-gray-700">
          <img src={contact} alt="Support" className="h-10 w-10 mx-auto mb-1" />
          Support
        </div>
        <div className="text-center text-sm font-medium text-gray-700">
          <img src={cardPayment} alt="Payments" className="h-10 w-10 mx-auto mb-1" />
          Payments
        </div>
      </div>

      {/* Appearance */}
      <div className="flex justify-between items-center bg-white px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <img src={brightness} alt="Appearance" className="h-5 w-5" />
          <span>Appearance</span>
        </div>
        <span className="text-sm bg-gray-100 px-2 py-1 rounded">LIGHT</span>
      </div>

      {/* Your Information */}
      <Section title="Your Information">
        <AccountTile icon={paperBag} label="Your orders" />
        <AccountTile icon={heart} label="Your wishlist" />
        <AccountTile icon={list} label="Bookmarked recipes" />
        <AccountTile icon={padlock} label="Address book" />
      </Section>

      {/* Feeding India */}
      <Section title="Feeding India">
        
        <AccountTile icon={list} label="Get Feeding India receipt" />
      </Section>

      {/* Payments and Coupons */}
      <Section title="Payments and Coupons">
        <AccountTile icon={wallet} label="Wallet" />
        <AccountTile icon={cardPayment} label="Blinkit Money" />
        
        <AccountTile icon={reward} label="Your collected rewards" badge />
      </Section>

      {/* Other Info */}
      <Section title="Other Information">
        <AccountTile icon={share} label="Share the app" />
        <AccountTile icon={info} label="About us" />
        <AccountTile icon={padlock} label="Account privacy" />
        <AccountTile icon={bellIcon} label="Notification preferences" />
        <AccountTile icon={logout} label="Log out" />
      </Section>

      <div className="text-center text-xs text-gray-500 py-4">blinkit v17.43.1</div>
    </div>
  );
};

export default Account;
