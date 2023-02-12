const express = require('express')
const app = express()
const port = 3000


const db = {
	courses: [
		{ id: 1, title: 'backend' },
		{ id: 2, title: 'frontend' },
		{ id: 3, title: 'fullstack!' }
	],
	team: {
		office: {Location: 'Tel aviv'},
		members: [
			{id: 1, name: 'Tim'},
			{id: 2, name: 'Tom'},
			{id: 3, name: 'Tam'}
		]
	}
}

app.get('/courses', (req, res) => {
	res.send(db.courses)
})

app.get('/courses/:id', (req, res) => {
	const id = Number(req.params.id)

	const foundCourse = db.courses.find(c => c.id === id)

	if (!foundCourse) {
		res.send(404)
	}
	else {
		res.send(foundCourse)
	}
})

app.get('/team', (req, res) => {
	res.send(db.team)
})

app.listen(port, () => {
	console.log(`the back ${port}`)
})
