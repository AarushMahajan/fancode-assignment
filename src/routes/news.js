const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/create/news').post(async (req, res, next) => {
        try {
            const body = req.body;
            const {matchId, tourId, title, description} = body
            if(!matchId || !tourId || !title || !description) {
                return res.json({
                    error: 'MatchId or tourId or title or description is required'
                })
            }

            return res.json(await News.createNews(matchId, tourId, title, description));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/:id').get(async (req, res, next) => {
        try {
            const matchId = req.params.id;
            return res.json(await News.getNewsByMatchId(matchId));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour/:id').get(async (req, res, next) => {
        try {
            const tourId = req.params.id;
            return res.json(await News.getNewsByTourId(tourId));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport/:id').get(async (req, res, next) => {
        try {
            const sportId = req.params.id;
            return res.json(await News.getNewsBySportId(sportId));
        } catch (err) {
            return next(err);
        }
    });
}