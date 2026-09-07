import { SidecarFactory } from "@open-design/sidecar";

const client = SidecarFactory.create({
  lifecycle: {
    async start() { return { ready: true }; },
    status(state) { return state; },
    async stop() {},
  },
});
await client.start();
await client.waitUntilStopped();
