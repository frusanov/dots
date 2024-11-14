import GLib from "gi://GLib";

const entry = App.configDir + "/src/index.ts";
const outdir = "/tmp/ags/js";
const user = GLib.environ_getenv(GLib.get_environ(), "USER");

try {
  // prettier-ignore
  await Utils.execAsync([
    `/home/${user}/.bun/bin/bun`, 'build', entry,
    '--outdir', outdir,
    '--conditions', 'worker',
    '--external', 'resource://*',
    '--external', 'gi://*',
  ]);
  await import(`file://${outdir}/index.js`);
} catch (error) {
  console.error(error);
}
