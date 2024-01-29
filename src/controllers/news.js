const news = require("../models/news");

const createNews = async (matchId, tourId, title, description) => {
    return await news.createNews(matchId, tourId, title, description);
}

const getNewsByMatchId = async (matchId) => {
    return await news.getNewsByMatchId(matchId, tourId, title, description);
}

const getNewsByTourId = async (tourId) => {
    return await news.getNewsByTourId(tourId);
}

const getNewsBySportId = async (sportId) => {
    return await news.getNewsBySportId(sportId);
}

module.exports = {
    createNews,
    getNewsByMatchId,
    getNewsByTourId,
    getNewsBySportId
}