const entry = App.configDir + "/src/index.ts";
const outdir = "/tmp/ags/js";

try {
  // prettier-ignore
  await Utils.execAsync([
    'bun', 'build', entry,
    '--outdir', outdir,
    '--conditions', 'worker',
    '--external', 'resource://*',
    '--external', 'gi://*',
  ]);
  await import(`file://${outdir}/index.js`);
} catch (error) {
  console.error(error);
}
