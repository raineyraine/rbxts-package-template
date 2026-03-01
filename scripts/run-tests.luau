--!nolint
--!nocheck
-- This is meant to run in Roblox
assert(game, "run-tests.luau is meant to run in")

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local runCLI = require(ReplicatedStorage.rbxts_include.node_modules["@rbxts-js"].Jest).runCLI
local chalk = require(ReplicatedStorage.rbxts_include.node_modules["@rbxts-js"]["ChalkLua"])
chalk.supportsColor = true

for key in _G do
	-- Clear registered modules to reset the roblox-ts runtime
	if typeof(key) == "Instance" and key:IsA("ModuleScript") then
		_G[key] = nil
	end
end

local _status, _result = runCLI(ReplicatedStorage.TS.__tests__, {
	verbose = true,
	ci = false,
}, { ReplicatedStorage.TS.__tests__ }):awaitStatus()

--print(status, result)
