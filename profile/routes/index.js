// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	
	res.render('index')
	
})

router.get('/submit',(req,res) => {

	const data = {greeting:'Welcome Sondos',
				description:'Im here,Man! What The fuck do you want?'}

	res.render('submit.mustache',data)
})

module.exports = router
