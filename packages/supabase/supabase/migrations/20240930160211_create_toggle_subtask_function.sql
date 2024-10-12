create or replace function toggle_subtask(id uuid)
returns void
language sql
as $$
  update subtasks
  set done = not done
  where id = id;
$$;
