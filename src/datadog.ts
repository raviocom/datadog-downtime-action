import {client, v1} from '@datadog/datadog-api-client'
import {AuthMethodsConfiguration} from '@datadog/datadog-api-client/dist/packages/datadog-api-client-common'

type DowntimeOptions = {
  message: string
  downtimeMinutes: number
  scope: string[]
  monitorId?: number
  monitorTags?: string[]
}

export class DatadogAPI {
  private downtimeApi: v1.DowntimesApi

  constructor(auth: AuthMethodsConfiguration, site: string) {
    const configuration = client.createConfiguration({authMethods: auth})

    client.setServerVariables(configuration, {
      site
    })

    this.downtimeApi = new v1.DowntimesApi(configuration)
  }

  async createDowntime({
    message,
    scope,
    downtimeMinutes,
    monitorId,
    monitorTags
  }: DowntimeOptions): Promise<v1.Downtime> {
    const downtimeInMS = downtimeMinutes * 60 * 1000

    return this.downtimeApi.createDowntime({
      body: {
        message,
        scope,
        start: Math.round(new Date().getTime() / 1000),
        end: Math.round((new Date().getTime() + downtimeInMS) / 1000),
        timezone: 'Etc/UTC',
        monitorId,
        monitorTags
      }
    })
  }
}
