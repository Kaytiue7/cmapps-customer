import React from 'react';

const ShippingFiltersContent: React.FC = () => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">KARGOLANMA DURUMU</label>
        <select id="platform-status" className="block w-full px-2 py-3 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
           <option>Kargolanma Durumu</option>
           <option>Kargolanmayı Bekliyor</option>
           <option>Kargolandı</option>
           <option>İptal Edildi</option>
           <option>İade Edildi</option>
           <option>Teslim Edildi</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">KARGO FİŞİ YAZDIRILMA DURUMU</label>
        <select id="platform-status" className="block w-full px-2 py-3 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
           <option>Kargo Fişi Yazdırılma Durumu</option>
           <option>Kargo Fişi Yazdırıldı</option>
           <option>Kargo Fişi Yazdırılmadı</option>
        </select>
      </div>
    </div>
  );
};

export default ShippingFiltersContent; 