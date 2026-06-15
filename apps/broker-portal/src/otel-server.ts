import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-grpc';
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-grpc';
import { HostMetrics } from '@opentelemetry/host-metrics';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';

import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
import { resourceFromAttributes } from '@opentelemetry/resources';

import { logs } from '@opentelemetry/api-logs';
import { metrics } from '@opentelemetry/api'; // Add this import

import {
  LoggerProvider,
  SimpleLogRecordProcessor,
} from '@opentelemetry/sdk-logs';

// Use the factory function instead of "new Resource"
const resource = resourceFromAttributes({
  [ATTR_SERVICE_NAME]: 'broker-portal',
});

// 1. Initialize Log Provider (Pino will use this via pino-opentelemetry)
const loggerProvider = new LoggerProvider({
  // Pass your processors inside the constructor here
  processors: [new SimpleLogRecordProcessor(new OTLPLogExporter())],
});

// Set the global provider
logs.setGlobalLoggerProvider(loggerProvider);

// 2. Initialize Node SDK
const sdk = new NodeSDK({
  resource,
  traceExporter: new OTLPTraceExporter(),

  // Replace metricExporter with metricReader
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter(),
    // Optional: How often to send metrics to Elastic.
    // Default is 60000ms (1 minute).
    exportIntervalMillis: 60000,
  }),

  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

// 3. Start Host Metrics using the global metrics API (CPU & Memory)
const hostMetrics = new HostMetrics({
  // Use the global meter provider instead of calling it on the sdk
  meterProvider: metrics.getMeterProvider(),
  name: 'broker-portal-metrics',
});

hostMetrics.start();
