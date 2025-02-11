import { Router } from 'express'

import * as db from '../db/JobsDb.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const jobs = await db.getAllJobs()
    res.json(jobs)
  } catch (error) {
    console.error(`${error}`)
    res.sendStatus(500)
  }
})

//router.get('/:id', async (req, res) => {
//  try {
//    const id = Number(req.params.id)
//    const jobs = await db.getJobsbyId(id)
//    res.json(jobs)
//  } catch (error) {
//    console.error(`${error}`)
//    res.sendStatus(500)
//  }
//})

//router.delete('/:id', async (req, res) => {
//  try {
//    const id = Number(req.params.id)
//    const bricks = await db.retireJobById(id)
//    console.log(id)
//    res.json(bricks)
//  } catch (error) {
//    console.error(`${error}`)
//    res.sendStatus(500)
//  }
//})

router.post('/', async (req, res) => {
  const newJob = req.body
  try {
    await db.addJob(newJob)
    res.sendStatus(200)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})
//Patch '/api/v1/bricks/:id' updateBrickinfo
//router.patch

export default router
