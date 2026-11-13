# Coordinator launcher

Coordinators of this repository are started with this launcher only, from the repository root:

```sh
node coordination/launcher.mjs catalog
node coordination/launcher.mjs check <id>
node coordination/launcher.mjs launch <id> [--brief <file>]
```

`catalog` lists the coordinator models with their price, task-fit rank (higher fits better) and role eligibility;
it does not say which are usable now. `check <id>` asks the provider about one model: availability, price
evidence and the time of the check; checks cost nothing. `launch <id>` starts a coordinator session on that model,
the brief file as its first message. Every call is logged in `coordination/events.jsonl`. Do not edit that log or
`catalog.json`.
