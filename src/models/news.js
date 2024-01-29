const mysql = require('../lib/mysql');

const createNews = async (matchId = null, tourId = null, title, description) => {
    const statement = `insert into mydb.news (title, description, tourId, matchId) values (?,?,?,?)`;
    const parameters = [title, description, tourId, matchId];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async (matchId) => {
    const statement = `select title, description from mydb.news where matchId = ?`;
    const parameters = [matchId];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async (tourId) => {
    const statement = `select title, description from mydb.news where tourId = ?`;
    const parameters = [tourId];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async (sportId) => {
    const statement = `select n.title, n.description 
    from mydb.sports s 
    inner join mydb.tours t on t.sportId = s.id 
    inner join mydb.matches m on m.tourId = t.id
    inner join mydb.news n on n.tourId = t.id or n.matchId = m.id
    where s.id = ?`;
    const parameters = [sportId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNews,
    getNewsByMatchId,
    getNewsByTourId,
    getNewsBySportId
}