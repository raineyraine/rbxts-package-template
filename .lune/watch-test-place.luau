local process = require("@lune/process")

local output = require("./utils/output")
local writeLine = output.writeLine
local setColor = output.setColor
local outputProcessStreams = output.outputProcessStreams

-- Build
require("./build-test-place")

-- Serve
do
	setColor("cyan")
	writeLine("Serving game ...")

	local created = process.create("rojo", { "serve", "test.project.json", "--verbose" }, {
		shell = true,
	})
	outputProcessStreams("rojo", created, output.INDENT_STRING:rep(1))

	setColor("reset")
end

-- Watch
do
	setColor("cyan")
	writeLine("Watching code ...")

	local created = process.create("pnpm", { "rbxtsc", "-w", "--rojo", "test.project.json", "--verbose" }, {
		shell = true,
	})
	outputProcessStreams("rbxtsc", created, output.INDENT_STRING:rep(1))

	setColor("reset")
end

return 0
