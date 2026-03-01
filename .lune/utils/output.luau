local process = require("@lune/process")
local stdio = require("@lune/stdio")
local task = require("@lune/task")

local INDENT_STRING = "    "
local prefix = ""

local function prefixEachLine(contents: string, prefix: string)
	local lines = contents:split("\n")
	for index, line in lines do
		lines[index] = prefix .. line
	end

	return table.concat(lines, "\n")
end

local function indentEachLine(contents: string, indent: number)
	return prefixEachLine(contents, INDENT_STRING:rep(indent))
end

local function writeLine(contents: string, indent: number?)
	indent = indent or 0
	local rendered = indentEachLine(contents, indent)

	stdio.write(`{prefix}{rendered}{stdio.color("reset")}\n`)
end

local function setColor(color: stdio.Color)
	prefix = stdio.color(color)
end

local isDead = false
local TICK_RATE = 1 / 100

local function outputProcessStreams(processName: string, childProcess: process.ChildProcess, prefix: string?)
	prefix = prefix
	local name = stdio.color("cyan") .. processName .. stdio.color("reset")
	name = `[{name}]`
	local errName = stdio.color("cyan") .. processName .. stdio.color("reset")
	errName = `[{errName}]`

	task.spawn(function()
		while not isDead do
			local stdout = childProcess.stdout:read()
			if stdout then
				stdio.write(prefixEachLine(`{name}: {stdout}\n`, prefix))
			end

			task.wait(TICK_RATE)
		end
	end)

	task.spawn(function()
		while not isDead do
			local stderr = childProcess.stderr:read()
			if stderr then
				stdio.ewrite(prefixEachLine(`{name}: {stderr}\n`, prefix))
			end

			task.wait(TICK_RATE)
		end
	end)
end

return {
	INDENT_STRING = INDENT_STRING,

	prefixEachLine = prefixEachLine,
	indentEachLine = indentEachLine,
	writeLine = writeLine,
	setColor = setColor,
	outputProcessStreams = outputProcessStreams,
}
