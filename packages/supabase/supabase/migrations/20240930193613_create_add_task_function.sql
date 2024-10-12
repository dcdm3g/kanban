create or replace function add_task(
  title text, 
  subtasks text[],
  column_id uuid,
  description text default null
)
returns uuid
language plpgsql
as $$
declare
  added_task_id uuid;
begin
  insert into tasks (column_id, title, description)
  values (column_id, title, description)
  returning id into added_task_id;

  insert into subtasks (task_id, text)
  select added_task_id, unnest(subtasks);

  return added_task_id;
end;
$$;
