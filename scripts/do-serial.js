// @ts-check
const { resolve, relative, join } = require("path")
const { execSync, exec } = require("child_process")
const execa = require("execa")
const findWorkspacePackages = require("@pnpm/find-workspace-packages").default

/**
 * @typedef {import("@pnpm/find-workspace-packages").Project} Project
 * @param {(pkg: Project) => void | Promise<unknown>} block
 */
async function doSerial(block) {
	for (const pkg of await findWorkspacePackages(process.cwd())) {
		await block(pkg)
	}
}

doSerial(async (pkg) => {
	const command = process.argv.slice(2)

	console.info(
		`Running ${command.join(" ")} in ${join(
			".",
			relative(process.cwd(), pkg.dir),
		)}`,
	)

	await execa(`pnpx`, command, {
		cwd: pkg.dir,
		encoding: "utf8",
		stdio: "inherit",
	}).catch((error) => {})

	console.log("")
})
