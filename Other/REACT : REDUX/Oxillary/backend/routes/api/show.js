const express = require("express");
const asyncHandler = require("express-async-handler");
// const { Show } = require("../../db/models");
const db = require("../../db/models");

const router = express.Router();

router.get('/:showId(\\d+)', asyncHandler(async function (req, res) {
    const showId = parseInt(req.params.showId, 10);

    const show = await db.Show.findByPk(showId, {
        where: {
            showId: showId
        },
    });
    return res.json({show});
}))

module.exports = router;