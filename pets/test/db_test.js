const expect = require('chai').expect
const { db, getPetsAndSpecies, updatePetName } = require('../db/db')
const { resetDB } = require('./utilities/dbUtilities')

describe('getPetsAndSpecies()', () => {
  beforeEach('reset the db', resetDB)
  it('returns the correct number of results', () =>
    getPetsAndSpecies().then(results =>
      expect(results.length).to.equal(1)
    )
  )
})

describe('updatePetName() success', () => {
  beforeEach('reset the db', resetDB)
    it('updates the name to the new name', () => {
      const petId = 1
      const newName = 'Fluffy'
      updatePetName(petId, newName).then(() =>
        db.one('SELECT name FROM pets WHERE pet_id=$1', petId)
          .then((pet) => {
            expect(pet.name).to.equal(newName)
          })
      )
    })
    it('returns success when updating successfully', () => {
      updatePetName(petId, newName).then(response =>
        expect(response.success).to.be.true
      )
    })
  })
  context('failure', () => {
    const updateFail = updatePetName('Fluffy', 45)

    it('returns an error when updating unsuccessfully', () =>
      updateFail.then(response =>
        expect(response.success).to.be.false
      )
    )
  })
})
