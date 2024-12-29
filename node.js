require("dotenv").config();

const app = {
	name: process.env.NAME,
	city: process.env.CITY,
	language: process.env.LANGUAGE,
};

console.log(app);
