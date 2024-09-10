create table subtasks (
  id uuid primary key default uuid_generate_v4(),
  task_id uuid references tasks(id) on delete cascade,
  "text" text not null,
  done boolean default false
);

create index idx_subtasks_task_id
on subtasks(task_id);

alter table subtasks enable row level security;

create policy "Users can view their own subtasks."
on subtasks for select
using (
  exists (
    select 1 from tasks
    where tasks.id = subtasks.task_id
  )
);

create policy "Users can create subtasks."
on subtasks for insert
to authenticated
with check (
  exists (
    select 1 from tasks
    where tasks.id = subtasks.task_id
  )
);

create policy "Users can update their own subtasks."
on subtasks for update
to authenticated
using (
  exists (
    select 1 from tasks
    where tasks.id = subtasks.task_id
  )
)
with check (
  exists (
    select 1 from tasks
    where tasks.id = subtasks.task_id
  )
);

create policy "Users can delete their own subtasks."
on subtasks for delete
to authenticated
using (
  exists (
    select 1 from tasks
    where tasks.id = subtasks.task_id
  )
);
