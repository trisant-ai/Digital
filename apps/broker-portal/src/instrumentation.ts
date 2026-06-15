export async function register() {
  // OpenTelemetry should only be initialized on the server-side
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./otel-server');
  }
}
