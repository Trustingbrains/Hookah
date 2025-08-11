import { MapPin } from 'lucide-react';
import Icon from "../assets/icon.jpg";

const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white sticky top-0 z-50">
    <div className="px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-sm opacity-90">Hookit in</span>
          <div className="text-xl font-bold">8 minutes</div>
          <div className="flex items-center space-x-1 text-sm opacity-90">
            <MapPin className="w-3 h-3" />
            <span>B Block, Sector 2, Meerut Division</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">🏠</div>
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"> 
          <img src={Icon} alt="Home Icon" />
            
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
