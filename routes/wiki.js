const express = require('express');
const { page } = require('../models');
const router = express.Router();
const addPage = require('../views/addPage')
const main = require('../views/main')

router.get("/", async (req, res, next) => {
  try {
    const pages = await page.findAll()
    res.send(main(pages));
  } catch (error) { next(error) }

});

router.get("/add", async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) { next(error) }
});

router.get('/:slug',async (req, res, next) => {
   try{
     const pages = await page.findOne({
       where:{
         slug: req.params.slug
       }
     })
     res.json(pages)
   }catch(error){
     next(error)
   }
});
router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  try {
    const pages = await page.create({

      title: 'fullstack academy',
      content: 'difficult'
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});


module.exports = router;
