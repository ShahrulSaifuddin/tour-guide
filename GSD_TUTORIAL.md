# GSD Tutorial — How to Use Your Agents

You have a powerful team of AI agents ready to help you build the **Shahrul Private Tour Guide** project. Each "agent" is triggered by a slash command.

## 🚀 Key Commands

### 1. The Strategist (`/plan`)

**When to use:** Start of a new phase or feature.
**What it does:** Breaks down a high-level goal from `ROADMAP.md` into a detailed step-by-step plan in `implementation_plan.md`.
**Usage:**

```bash
/plan [Phase Number]
# Example: /plan 1
```

### 2. The Engineer (`/execute`)

**When to use:** After a plan is approved.
**What it does:** Writes code, creates files, and implements the plan. It updates `task.md` as it goes.
**Usage:**

```bash
/execute [Phase Number]
# Example: /execute 1
```

### 3. The Architect (`/map`)

**When to use:** When you want to update the system documentation.
**What it does:** Scans your codebase and updates `ARCHITECTURE.md` and `STACK.md` to reflect reality.
**Usage:**

```bash
/map
```

### 4. The Auditor (`/verify`)

**When to use:** After execution is complete, before marking "Done".
**What it does:** Runs tests, checks requirements against `PRD.md`, and produces a verification report.
**Usage:**

```bash
/verify [Phase Number]
# Example: /verify 1
```

### 5. Task Management (`/add-todo`)

**When to use:** When you have an idea or find a bug but don't want to switch context.
**What it does:** Adds an item to `todo.md`.
**Usage:**

```bash
/add-todo "Fix the login button alignment"
/check-todos
```

## 📋 The Workflow

1.  **Start a Phase**: Check `ROADMAP.md` to see what's next.
2.  **Plan**: Run `/plan 1` to generate a plan for Phase 1. Review `implementation_plan.md`.
3.  **Execute**: Run `/execute 1`. The agent will start building.
4.  **Verify**: Run `/verify 1` to ensure it works.
5.  **Complete**: Mark the phase as done in `ROADMAP.md`.

## 📂 Key Files

- **`PRD.md`**: The "Concept Car" - What we are building.
- **`ROADMAP.md`**: The "GPS" - Strategic phases.
- **`implementation_plan.md`**: The "Blueprint" - Tactical steps for the current task.
- **`todo.md`**: The "Backlog" - Quick tasks.
- **`STATE.md`**: The "Ship's Log" - Current status.

## 💡 Tips

- **One Phase at a time**: Focus on one phase to keep context clear.
- **Review Plans**: Always check `implementation_plan.md` before running `/execute`.
- **Update State**: The agents update `STATE.md`, but you can also edit it to correct course.
