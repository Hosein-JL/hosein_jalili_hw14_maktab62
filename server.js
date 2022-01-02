const mongoose = require("mongoose");

// 1
//use store

mongoose.connect("mongodb://localhost/store");

//##############################################################//

// 1-1

const Product = mongoose.model("Product", {
  type: "string",
  title: "string",
  description: "string",
  shipping: "object",
  pricing: "object",
  details: "object",
});

//data

const ProductOne = {
  type: "Audio Album",
  title: "A Love Supreme",
  description: "by John Coltrane",
  shipping: {
    weight: 6,
    dimensions: {
      width: 10,
      height: 10,
      depth: 1,
    },
  },
  pricing: {
    list: 1200,
    retail: 1100,
    savings: 100,
    pct_savings: 8,
  },
  details: {
    title: "A Love Supreme [Original Recording Reissued]",
    artist: "John Coltrane",
    genre: ["Jazz", "General"],
    tracks: [
      "A Love Supreme Part I: Acknowledgement",
      "A Love Supreme Part II - Resolution",
      "A Love Supreme, Part III: Pursuance",
      "A Love Supreme, Part IV-Psalm",
    ],
  },
};

const otherProducts = [
  {
    type: "Audio Album",
    title: "BlackStar",
    description:
      "BlackStar is the twenty-fifth and final studio album by English musician David Bowie. It was released worldwide through ISO, RCA, Columbia, and Sony on 8 January 2016, coinciding with Bowie's 69th birthday",
    shipping: {
      weight: 8,
      dimensions: {
        width: 15,
        height: 15,
        depth: 1,
      },
    },
    pricing: {
      list: 1450,
      retail: 2450,
      savings: 110,
      pct_savings: 5,
    },
    details: {
      title: "BlackStar [Original Recording Reissued]",
      artist: "David Bowie",
      genre: ["Experimental rock", "Art rock", "Avant-garde jazz"],
      tracks: [
        "Blackstar",
        "'Tis a Pity She Was a Whore",
        "Lazarus",
        "Sue (Or in a Season of Crime)",
        "Girl Loves Me",
        "Dollar Days",
        "I Can't Give Everything Away",
      ],
    },
  },
  {
    type: "Audio Album",
    title: "Funeral",
    description:
      "Funeral is the debut studio album by Canadian indie rock band Arcade Fire, released on September 14, 2004 by Merge Records.",
    shipping: {
      weight: 10,
      dimensions: {
        width: 12,
        height: 10,
        depth: 1,
      },
    },
    pricing: {
      list: 2450,
      retail: 3450,
      savings: 310,
      pct_savings: 2,
    },
    details: {
      title: "Funeral [Original Recording Reissued]",
      artist: "Arcade Fire",
      genre: [
        "Indie rock",
        "Alternative rock",
        "Art rock",
        "Baroque pop",
        "Rock",
      ],
      tracks: [
        "Neighborhood #1 (Tunnels)",
        "Neighborhood #2 (Laïka)",
        "Une année sans lumière",
        "Crown of Love",
        "Wake Up",
        "Haiti",
        "Rebellion (Lies)",
      ],
    },
  },
  {
    type: "Film",
    shipping: {
      weight: 10,
      dimensions: {
        width: 20,
        height: 30,
        depth: 1,
      },
    },
    pricing: {
      list: 2200,
      retail: 5100,
      savings: 200,
      pct_savings: 10,
    },
    details: {
      title: "The Matrix",
      director: ["Andy Wachowski", "Larry Wachowski"],
      writer: ["Andy Wachowski", "Larry Wachowski"],
      aspect_ratio: "1.66:1",
    },
  },
  {
    type: "Film",
    shipping: {
      weight: 25,
      dimensions: {
        width: 12,
        height: 21,
        depth: 2,
      },
    },
    pricing: {
      list: 5200,
      retail: 10100,
      savings: 500,
      pct_savings: 15,
    },
    details: {
      title: "InterStellar",
      director: ["Christopher Nolan"],
      writer: ["Christopher Nolan", "Jonathan Nolan"],
      aspect_ratio: "1.33:1",
    },
  },
  {
    type: "Film",
    shipping: {
      weight: 18,
      dimensions: {
        width: 16,
        height: 16,
        depth: 1,
      },
    },
    pricing: {
      list: 7100,
      retail: 8000,
      savings: 429,
      pct_savings: 9,
    },
    details: {
      title: "Inception",
      director: ["Christopher Nolan"],
      writer: ["Christopher Nolan"],
      aspect_ratio: "1.50:1",
    },
  },
];

//##############################################################//

// 1-2-A

function createOne(product) {
  Product.create(product, (err, result) => {
    if (err) console.log(err);
    console.log("create one --------->", result);
  });
}

// createOne(ProductOne);

//##############################################################//

// 1-2-B
//db.products.insertMany()

function createMany(products) {
  Product.insertMany(products, (err, result) => {
    if (err) console.log(err);
    console.log(" create many --------->", result);
  });
}

// createMany(otherProducts);

//##############################################################//

// 1-3-A,B

function showPretty() {
  Product.find({}, (err, products) => {
    if (err) console.log(err);
    console.log("Products show Pretty ------>", products);
  });
}

// showPretty();

//##############################################################//

// 1-3-C

function showWithoutID() {
  Product.find({}, { _id: 0 }, (err, products) => {
    if (err) console.log(err);
    console.log("show documents without _id: ------>", products);
  });
}

// showWithoutID();

//##############################################################//

// 1-3-D

function showTypeAudioAlbum() {
  Product.find({ type: "Audio Album" }, (err, products) => {
    if (err) console.log(err);
    console.log("show, type: Audio Album: ------>", products);
  });
}

// showTypeAudioAlbum();

//##############################################################//

// 1-3-E

function showRetailLt5000() {
  Product.find({ "pricing.retail": { $lt: 5000 } }, (err, products) => {
    if (err) console.log(err);
    console.log(" show, pricing.retail < 5000: ------>", products);
  });
}

// showRetailLt5000();

//##############################################################//

// 1-3-F

function showNeFilm() {
  Product.find({ type: { $ne: "Film" } }, (err, products) => {
    if (err) console.log(err);
    console.log("show, type != Film: ------>", products);
  });
}

// showNeFilm();

//##############################################################//

// 1-3-G

function showWeightGt15() {
  Product.find({ "shipping.weight": { $gt: 15 } }, (err, products) => {
    if (err) console.log(err);
    console.log("show, shipping.weight > 15: ------>", products);
  });
}

// showWeightGt15();

//##############################################################//

// 1-3-H

function updatePricingList() {
  Product.updateOne(
    { "details.title": "The Matrix" },
    { "pricing.list": 2500 },
    (err, result) => {
      if (err) console.log("err -------> ", err);
      console.log(" update, pricing.list = 2500: -------> ", result);
    }
  );
}

// updatePricingList();

//##############################################################//

// 1-3-I

function filterTypeAndDepht() {
  Product.find({ $and: [
    { type: "Film" },
    { "shipping.dimensions.depth": 1}
  ] },
    (err, products) => {
      if (err) console.log("err -------> ", err);
      console.log(
        "show, type = Film and shipping.dimenstions.depth = 1: ------> ",
        products
      );
    }
  );
}

// filterTypeAndDepht();

//##############################################################//

// 1-3-J

function countTypeFilm() {
  Product.count({ type: "Film" }, (err, products) => {
    if (err) console.log(err);
    console.log("count, documents with type = Film: ------> ", products);
  });
}

// countTypeFilm();

//##############################################################//

// 1-3-K

function filterDetailWriter() {
  Product.find(
    { "details.writer": { $regex: "Jonathan Nolan" } },
    (err, products) => {
      if (err) console.log("err -------> ", err);
      console.log("show, details.writer = Jonathan Nolan: ------> ", products);
    }
  );
}

// filterDetailWriter();

//##############################################################//

// 1-3-L

function maxPricingSavings() {
  Product.find({})
    .sort("-pricing.savings")
    .limit(1)
    .exec((err, products) => {
      if (err) console.log(err);
      console.log("show, max pricing.savings: ------>", products);
    });
}

// maxPricingSavings();

//##############################################################//

// 1-3-M

function showDetailsByX() {
  Product.find({ "details.title": { $regex: "x" } }, (err, products) => {
    if (err) console.log(err);
    console.log("show, details.title includes x: ------>", products);
  });
}

// showDetailsByX();

//##############################################################//

// 1-3-N

function deleteUser() {
  Product.deleteOne({ "details.aspect_ratio": "1.66:1" }, (err, result) => {
    if (err) console.log(err);
    console.log(" delete, details.aspect_ratio = 1.66:1 ------->", result);
  });
}

// deleteUser();
