const express = require('express');
const { Page } = require('../models');
const router = express.Router();
const addPage = require('../views/addPage')
const wikiPage = require('../views/wikipage')

router.get("/", async (req, res, next) => {
  try {
    res.send("hello");
  } catch (error) { next(error) }

});


router.post("/", async (req, res,next) => {
  try{
    res.json(req.body)
    const data = await user.findALl();
  }catch(error){
    next(error)
  }
})

router.get("/add", async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) { next(error) }
});


router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  try {
    const page = await Page.create({
      title: 'fullstack',
      content: 'difficult'
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});


module.exports = router;
