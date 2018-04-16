module.exports = function(app, db) {
  app.get("/leaderboard", (req, res) => {
    db.collection("leaderboard")
      .find({})
      .toArray((err, result) => {
        if(err) {
          res.send(err);
        } else {
          res.send(result.ops[0])
        }
      })
  })

  app.post("/leaderboard", (req, res) => {
    const data = {
      name: req.body.name,
      level: req.body.level,
      dungeonLevel: req.body.dungeonLevel,
      weapon: req.body.weapon,
      armor: req.body.armor,
      time: req.body.time,
    }
    db.collection("leaderboard")
      .insert(data, (err, res) => {
        if(err) {
          console.log(err);
        } else {
          res.send("Data was updated succesfully.")
        }
      })
  })
}