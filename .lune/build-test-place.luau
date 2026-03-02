local process = require("@lune/process")

local output = require("./utils/output")
local writeLine = output.writeLine
local setColor = output.setColor

-- Compile
do
	setColor("cyan")
	writeLine("Compiling ...")

	local result = process.exec("pnpm", { "rbxtsc", "--type", "game", "--rojo", "test.project.json", "--verbose" }, {
		stdio = "default",
		shell = true,
	})

	if result.ok then
		setColor("reset")
		writeLine(result.stdout, 1)
		setColor("green")
		writeLine("Compilation complete!", 1)
	else
		setColor("red")
		writeLine(`Compilation failed!\n{result.stdout}`, 1)
		process.exit(1)
	end

	setColor("reset")
end

-- Build test game
do
	setColor("cyan")
	writeLine("Building game ...")

	local result = process.exec("rojo", { "build", "test.project.json", "-o", "test.rbxl" }, {
		stdio = "default",
		shell = true,
	})

	if result.ok then
		setColor("reset")
		writeLine(result.stdout, 1)
		setColor("green")
		writeLine("Build complete!", 1)
	else
		setColor("red")
		writeLine(`Build failed!\n{result.stdout}`, 1)
		process.exit(1)
	end

	setColor("reset")
end

return 0
