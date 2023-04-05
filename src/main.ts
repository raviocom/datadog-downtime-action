import * as core from '@actions/core'
import {DatadogAPI} from './datadog'

function parseNumber(input: string): number | undefined {
  if (input === '') return undefined

  const parsed = parseInt(input)
  if (isNaN(parsed)) {
    core.warning(`Unable to parse ${input} as a number, using default value`)
    return undefined
  }

  return parsed
}

function parseStringArray(input: string): string[] | undefined {
  if (input === '') return undefined

  try {
    return JSON.parse(input)
  } catch (error) {
    core.warning(
      `Unable to parse ${input} as a JSON array, using default value`
    )
    return undefined
  }
}

async function run(): Promise<void> {
  try {
    const message = core.getInput('message')
    const downtimeMinutes = parseNumber(core.getInput('downtime-minutes')) ?? 5
    const scope = parseStringArray(core.getInput('scope')) ?? ['*']
    const monitorTags = parseStringArray(core.getInput('monitor-tags'))
    const monitorId = parseNumber(core.getInput('monitor-id'))

    const api = new DatadogAPI(
      {
        apiKeyAuth: core.getInput('api-key'),
        appKeyAuth: core.getInput('app-key')
      },
      core.getInput('site')
    )

    core.info(`Creating downtime for ${downtimeMinutes} minutes`)
    await api.createDowntime({
      message,
      downtimeMinutes,
      scope,
      monitorId,
      monitorTags
    })
    core.info('Downtime created')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
