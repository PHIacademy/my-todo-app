# my-todo-app

A minimal JavaScript to-do list library, created as a **test fixture repository** for the Final Project (Phase 6) of the *AI Engineering with Claude* Nanodegree — Course 4: *Bounded Autonomy and Guardrails with Claude and Claude Code*. It's used as the target repository for a multi-agent AI code review system built with the Claude Agent SDK.

## Purpose

This repo isn't a real product — it exists purely to give the code review orchestrator something realistic to analyze. It contains a small set of core to-do functions (`addTodo`, `removeTodo`, `searchTodos`, `upgradeToPremium`) with a few deliberate rough edges — missing input validation, no test coverage, and an unfinished payment stub — so that the orchestrator's three subagents (Code Quality Analyzer, Test Coverage Analyzer, Refactoring Suggester) have concrete, meaningful issues to surface in their reports.

## Contents

- `todos.js` — core add/remove to-do logic
- `search.js` — search-by-text feature (added in PR #2)
- `premium.js` — stubbed-out premium upgrade feature (added in PR #3)

## Pull Requests

| PR | Title | Status |
|----|-------|--------|
| #1 | add clean code fixture | Merged |
| #2 | Add search functionality for todos | Merged |
| #3 | Add premium subscription features | Merged |

## Note on origin

This repository was created as a substitute for the originally assigned test repository, `airaamane/simple-todo-app`, which returned a 404 (not found/inaccessible) at the time of submission. See the main project submission's README for details.
