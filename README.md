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

For more information about scopes, see the [Datadog downtime documentation](https://docs.datadoghq.com/monitors/notify/downtimes/?tab=bymonitorname#downtime-scope).

```yaml
- uses: brookke/datadog-downtime-action@v1
  downtime-minutes: 5
  with:
    monitor-id: 123456
    api-key: ${{ secrets.DATADOG_API_KEY }}
    app-key: ${{ secrets.DATADOG_APP_KEY }}
```

### Specific monitor tag(s)

Create a downtime for 5 minutes that will affect only the monitor with the tag `env:prod`.

For more information about monitor tags, see the [Datadog downtime documentation](https://docs.datadoghq.com/monitors/notify/downtimes/?tab=bymonitortags#choose-what-to-silence).

```yaml
- uses: brookke/datadog-downtime-action@v1
  downtime-minutes: 5
  with:
    monitor-tags: '["ignore-during-deploy"]'
    api-key: ${{ secrets.DATADOG_API_KEY }}
    app-key: ${{ secrets.DATADOG_APP_KEY }}
```

### Specific scope(s)

Create a downtime for 5 minutes that will affect only sources with the scope `env:prod`.

For more information about scopes, see the [Datadog downtime documentation](https://docs.datadoghq.com/monitors/notify/downtimes/?tab=bymonitorname#downtime-scope).

```yaml
- uses: brookke/datadog-downtime-action@v1
  downtime-minutes: 5
  with:
    scope: '["env:prod"]'
    api-key: ${{ secrets.DATADOG_API_KEY }}
    app-key: ${{ secrets.DATADOG_APP_KEY }}
```

### Specific message

Create a downtime for 5 minutes that will affect all monitors in your Datadog account and will have the message `Maintenance window - @username` which will notify the user `username` via Datadog.

Notifications can be sent to specific users by using the `@username` notation, see the [Datadog downtime API documentation](https://docs.datadoghq.com/api/latest/downtimes/?code-lang=typescript#schedule-a-downtime) for more information.

```yaml
- uses: brookke/datadog-downtime-action@v1
  downtime-minutes: 5
  with:
    message: 'Maintenance window - @username'
    api-key: ${{ secrets.DATADOG_API_KEY }}
    app-key: ${{ secrets.DATADOG_APP_KEY }}
```
