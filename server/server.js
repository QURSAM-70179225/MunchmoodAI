require('dotenv').config()
const express = require('express')
const cors = require('cors')
const foods = require('./data/foods.json')

const app = express()
const PORT = process.env.PORT || 5000

// Allow frontend to connect
app.use(cors())
app.use(express.json())

// Welcome test route
app.get('/', (req, res) => {
  res.json({ message: '🍔 Mood Munch AI Fast-Food Server is running!' })
})

// Get full menu
app.get('/api/foods', (req, res) => {
  res.json(foods)
})

// Smart recommendation system
app.post('/api/recommend', (req, res) => {
  const { mood, budget, spice, hunger } = req.body

  let eligible = [...foods]

  // Budget filter
  if (budget) {
    const limit = parseInt(budget)
    eligible = eligible.filter(item => item.price <= limit)
  }

  // Spice filter
  if (spice && spice !== 'any') {
    const levelMap = {
      peaceful: 'mild',
      desi: 'medium',
      fiery: 'hot'
    }
    const target = levelMap[spice] || spice
    eligible = eligible.filter(item => 
      item.spiceLevel === target || item.spiceLevel === 'medium'
    )
  }

  // Hunger filter
  if (hunger) {
    eligible = eligible.filter(item => 
      item.hungerLevel === hunger || item.hungerLevel === 'medium'
    )
  }

  // Mood boost — matches get priority
  if (mood) {
    eligible.sort((a, b) => {
      const aMatch = a.moodTags.includes(mood) ? 1 : 0
      const bMatch = b.moodTags.includes(mood) ? 1 : 0
      return bMatch - aMatch
    })
  }

  // Fallback — if nothing matches, show all items
  if (eligible.length === 0) eligible = foods

  res.json({
    success: true,
    food: eligible[0],
    optionsFound: eligible.length,
    note: `Found ${eligible.length} tasty picks!`
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Mood Munch Fast-Food Server live on port ${PORT}`)
})