<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# Datadog downtime action

This action allows you to create a downtime in Datadog. This is useful for example when you want to schedule a maintenance window for your application during a deployment.

## Usage

```yaml
- uses: brookke/datadog-downtime-action@v1
  downtime-minutes: 5
  with:
    message: 'Scheduled downtime for deployment from GitHub actions'
    scope: '*'
    site: 'datadoghq.eu'
    api-key: ${{ secrets.DATADOG_API_KEY }}
    app-key: ${{ secrets.DATADOG_APP_KEY }}
```
