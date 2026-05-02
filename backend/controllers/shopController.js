import Shop from "../models/shopModel.js";

// 👉 distance calculate function
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

// 👉 API
export const getNearbyShops = async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ message: "Location missing" });
  }

  const shops = await Shop.find();

  const nearby = shops.filter((shop) => {
    if (!shop.location?.lat || !shop.location?.lng) return false;

    const distance = getDistance(
      lat,
      lng,
      shop.location.lat,
      shop.location.lng
    );

    return distance <= 10; // 🔥 10 km radius
  });

  res.json(nearby);
};