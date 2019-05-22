require("dotenv").config()
const mongoose = require('mongoose');
const Character = require('../models/Character')

const dbName = 'characters-webmad0419'
mongoose.connect(process.env.DB)
.then(x => {
  mongoose.connection.db.dropDatabase()
  .then(x => {

    const characters = [
        {
          id: 1,
          name: "Han Solo",
          occupation: "Smuggler",
          weapon: "Blaster Pistol",
          cartoon: true
        },
        {
          id: 2,
          name: "Luke Skywalker",
          occupation: "Jedi Knight",
          weapon: "Lightsaber",
          cartoon: false
        },
        {
          id: 3,
          name: "Sponge Bob",
          occupation: "Lives under the sea",
          weapon: "Crabby Patty",
          cartoon: true
        }
      ]
    
      Character.create(characters)
      .then(charactersCreated => {
        console.log(`Creados ${charactersCreated.length} personajes`)
        mongoose.connection.close()
      })
      .catch(err => console.log(`Hubo un error: ${err}`))
  })
  
  

})


