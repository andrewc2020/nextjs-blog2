import '@testing-library/jest-dom';
import next from "next";
import { loadEnvConfig } from '@next/env'

next({ dev: true })

export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}






