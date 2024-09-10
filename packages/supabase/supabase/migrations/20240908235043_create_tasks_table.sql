create table tasks (
  id uuid primary key default uuid_generate_v4(),
  column_id uuid references columns(id) on delete cascade,
  title text not null,
  description text,
  "order" int not null,

  unique (column_id, "order")
);

create index idx_tasks_column_id
on tasks(column_id);

alter table tasks enable row level security;

create policy "Users can view their own tasks."
on tasks for select
using (
  exists (
    select 1 from columns
    where columns.id = tasks.column_id
  )
);

create policy "Users can create tasks."
on tasks for insert
to authenticated
with check (
  exists (
    select 1 from columns
    where columns.id = tasks.column_id
  )
);

create policy "Users can update their own tasks."
on tasks for update
to authenticated
using (
  exists (
    select 1 from columns
    where columns.id = tasks.column_id
  )
)
with check (
  exists (
    select 1 from columns
    where columns.id = tasks.column_id
  )
);

create policy "Users can delete their own tasks."
on tasks for delete
to authenticated
using (
  exists (
    select 1 from columns
    where columns.id = tasks.column_id
  )
);
