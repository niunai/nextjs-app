// client.ts
import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const client = createClient ({
     projectId,
     dataset,
     apiVersion: 'v2023-07-08', 
     useCdn: true,
})
