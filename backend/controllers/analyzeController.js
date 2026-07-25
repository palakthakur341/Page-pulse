const service = require("../services/analyzeService");

console.log("Imported service:", service);

const analyzeWebsite = async (req, res) => {
  try {
    const { url } = req.body;

    const result = await service.analyzeWebsiteService(url);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeWebsite,
};