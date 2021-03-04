const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { Show } = require("../../db/models");



router.get('/', asyncHandler(async (req, res) => {
    const shows = await Show.findAll();
    res.json({ shows });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    res.json({greeting});
}));

router.post('/', asyncHandler(async (req, res) => {
    const {
        userId,
        artistName,
        date,
        genre,
        cityId,
        price,
        partySize,
        title,
        info,
        imageURL,
        rating,
        youtubeURL
    } = req.body;
    const show = await Show.create({
        userId,
        artistName,
        date,
        genre,
        cityId,
        price,
        partySize,
        title,
        info,
        imageURL,
        rating,
        youtubeURL
    });
    res.json({ show })
}));

