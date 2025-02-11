import connection from './connection.ts'
import { Job, NewJob } from '../../models/jobsModel.ts'

export async function getAllJobs(db = connection): Promise<Job[]> {
  return db('Jobs').select(
    'jobDate',
    'product',
    'applicationRate',
    'pickup',
    'docketNumber',
    'orderNumber',
    'truckNumber',
    'driver',
    'cropType',
    'reasonsForFailure',
  )
}

export async function addJob(newjob: NewJob) {
  const db = connection
  return db('Jobs').insert(newjob)
}
