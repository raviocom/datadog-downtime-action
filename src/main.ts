import * as core from '@actions/core'
import {DatadogAPI} from './datadog'

async function run(): Promise<void> {
  try {
    const message: string = core.getInput('message')
    const downtimeMinutes: number = parseInt(core.getInput('downtime-minutes'))
    const scope: string[] = core.getInput('scope').split(',')

    const api = new DatadogAPI(
      {
        apiKeyAuth: core.getInput('api-key'),
        appKeyAuth: core.getInput('app-key')
      },
      core.getInput('site')
    )

    core.info(`Creating downtime for ${downtimeMinutes} minutes`)
    await api.createDowntime(message, downtimeMinutes, scope)
    core.info('Downtime created')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
