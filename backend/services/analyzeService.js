console.log("✅ analyzeService.js loaded");
const axios = require("axios");
const cheerio = require("cheerio");

const analyzeWebsiteService = async (url) => {
  const startTime = Date.now();

  const response = await axios.get(url);

  const endTime = Date.now();

  const responseTime = endTime - startTime;

  const html = response.data;

  const $ = cheerio.load(html);

  const title = $("title").text();

  const metaDescription =
    $('meta[name="description"]').attr("content") || "No Description";

  const h1Count = $("h1").length;

  let missingAlt = 0;

  $("img").each((index, image) => {
    if (!$(image).attr("alt")) {
      missingAlt++;
    }
  });

  const bodyText = $("body").text();

  const wordCount = bodyText
    .replace(/\s+/g, " ")
    .trim()
    .split(" ").length;

  return {
    status: response.status,
    responseTime,
    title,
    metaDescription,
    h1Count,
    missingAlt,
    wordCount,
  };
};

module.exports = {
  analyzeWebsiteService,
};