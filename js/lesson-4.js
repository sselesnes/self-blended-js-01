const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
const firstTag = apartment.tags[0];
const aptRating = apartment["rating"];
apartment.tags.push("trusted");
apartment.rating = 4.7;
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};
