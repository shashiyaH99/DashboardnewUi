import React from 'react';
import Image from 'next/image';

const vegetables = [
  {
    name: 'Snack-Gourd',
    image: '/snack.jpg',
    centers: ['Dambulla', 'Pettah'],
    prices: [
      { retailPrice: 150, wholeSalePrice: 120 },
      { retailPrice: 150, wholeSalePrice: 120 },
      { retailPrice: 150, wholeSalePrice: 120 },
    ],
  },
  {
    name: 'Cabbage',
    image: '/green-cabbage.jpg',
    centers: ['Dambulla', 'Pettah'],
    prices: [
      { retailPrice: 150, wholeSalePrice: 120 },
      { retailPrice: 150, wholeSalePrice: 120 },
      { retailPrice: 150, wholeSalePrice: 120 },
    ],
  },
  {
    name: 'Brinjal',
    image: '/brinjal.jpeg',
    centers: ['Dambulla', 'Pettah'],
    prices: [
      { retailPrice: 150, wholeSalePrice: 120 },
      { retailPrice: 150, wholeSalePrice: 120 },
      { retailPrice: 150, wholeSalePrice: 120 },
    ],
  },
];

const VegetablePricesTable = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 p-8">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center text-white py-6">
          Sri Lankan Vegetable Prices
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="bg-blue-800">
                <th className="px-4 py-2">Vegetable</th>
                <th className="px-4 py-2">Center</th>
                <th className="px-4 py-2">Yesterday Retails Price</th>
                <th className="px-4 py-2">Yesterday WholeSale Price</th>
                <th className="px-4 py-2">Today Retails Price</th>
                <th className="px-4 py-2">Today WholeSale Price</th>
                <th className="px-4 py-2">Tomorrow Retails Price</th>
                <th className="px-4 py-2">Tomorrow WholeSale Price</th>
              </tr>
            </thead>
            <tbody>
              {vegetables.map((vegetable, index) => (
                <React.Fragment key={index}>
                  {vegetable.centers.map((center, centerIndex) => (
                    <tr key={`${index}-${centerIndex}`} className="border-b border-blue-700">
                      {centerIndex === 0 && (
                        <td rowSpan={2} className="px-4 py-2">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={vegetable.image}
                              alt={vegetable.name}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <span>{vegetable.name}</span>
                          </div>
                        </td>
                      )}
                      <td className="px-4 py-2">{center}</td>
                      {vegetable.prices.map((price, priceIndex) => (
                        <React.Fragment key={priceIndex}>
                          <td className="px-4 py-2">{price.retailPrice}</td>
                          <td className="px-4 py-2">{price.wholeSalePrice}</td>
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VegetablePricesTable;