<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# Datadog downtime action

This action allows you to create a downtime in Datadog. This is useful for example when you want to schedule a maintenance window for your application during a deployment.

## Usage

### Basic

Create a downtime for 5 minutes that will affect all monitors in your Datadog account.

```yaml
- uses: brookke/datadog-downtime-action@v1
  downtime-minutes: 5
  with:
    api-key: ${{ secrets.DATADOG_API_KEY }}
    app-key: ${{ secrets.DATADOG_APP_KEY }}
```

### Specific monitor

Create a downtime for 5 minutes that will affect only the monitor with the ID `123456`.

```yaml
- uses: brookke/datadog-downtime-action@v1
  downtime-minutes: 5
  with:
    monitor-id: 123456
    api-key: ${{ secrets.DATADOG_API_KEY }}
    app-key: ${{ secrets.DATADOG_APP_KEY }}
```

### Specific scope

Create a downtime for 5 minutes that will affect only the monitors with the scope `env:prod`.

```yaml
- uses: brookke/datadog-downtime-action@v1
  downtime-minutes: 5
  with:
    scope: '["env:prod"]'
    api-key: ${{ secrets.DATADOG_API_KEY }}
    app-key: ${{ secrets.DATADOG_APP_KEY }}
```

### Specific message

Create a downtime for 5 minutes that will affect all monitors in your Datadog account and will have the message `Maintenance window`.

```yaml
- uses: brookke/datadog-downtime-action@v1
  downtime-minutes: 5
  with:
    message: 'Maintenance window'
    api-key: ${{ secrets.DATADOG_API_KEY }}
    app-key: ${{ secrets.DATADOG_APP_KEY }}
```
