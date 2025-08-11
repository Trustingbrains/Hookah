const banners = [
  {
    id: 1, title: "NEWLY LAUNCHED", subtitle: "For You",
    bgColor: "bg-gradient-to-r from-red-500 to-orange-500", textColor: "text-white"
  },
  {
    id: 2, title: "HOUSEFULL SALE", subtitle: "DEAL OF THE DAY",
    bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500", textColor: "text-white"
  },
  {
    id: 3, title: "TRENDING NEAR YOU", subtitle: "Featured",
    bgColor: "bg-gradient-to-r from-blue-600 to-purple-600", textColor: "text-white"
  },
  {
    id: 4, title: "DAILY DEALS", subtitle: "Featured",
    bgColor: "bg-gradient-to-r from-cyan-400 to-blue-500", textColor: "text-white"
  }
];

const Banners = () => (
  <div className="px-4 py-4">
    <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
      {banners.map(banner => (
        <div key={banner.id} className={`${banner.bgColor} ${banner.textColor} rounded-2xl p-4 min-w-[160px] flex-shrink-0 relative overflow-hidden`}>
          <div className="relative z-10">
            <div className="text-xs font-medium opacity-90 mb-1">Featured</div>
            <div className="text-sm font-bold leading-tight">{banner.title}</div>
            <div className="text-xs mt-1 opacity-90">{banner.subtitle}</div>
          </div>
          <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/10 rounded-full" />
        </div>
      ))}
    </div>
  </div>
);

export default Banners;
