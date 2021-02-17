/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
	preset: "ts-jest",
	setupFilesAfterEnv: ["./src/jest.setup.ts"],
}
