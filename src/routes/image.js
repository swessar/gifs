var express = require('express');
var Image = require('../app/models/image');

module.exports = function(router) {
  router.route('/add_image')
    .post(function(req, res) {
      var image = new Image();

      image.date = req.body.date;
      image.userId = req.body.userId;
      workout.exerciseUnits = [];

      req.body.sessions.forEach(function(session) {
        var sezch = new ExerciseSession({
          userId: session.userId,
          exerciseId: session.exerciseId,
          sets: session.sets,
          date: req.body.date,
          exercise: session.exerciseId
        });

        sezch.save();
        workout.exerciseUnits.push(sezch);
      });

      workout.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Workout created!' });
      })
    });

}