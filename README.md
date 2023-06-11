# Simple todo list using typescript without architecture

This is simple project of todo list using typescript without architecture.

## Requirement

- Node 18

## How to execute?

- `npm install`
- `npm run dev`

## Routes

- List all tasks: `GET /api/tasks`
- Only one task: `GET /api/tasks/:id`
- Create a task: `POST /api/tasks`
- Update a task: `PUT /api/tasks/:id`
- Delete a task: `DELETE /api/tasks/:id`

Body example:

```json
{
  "title": "title",
  "description": "description",
  "priority": "low",
  "completed": false,
  "createdAt": "2023-01-01"
}
```
