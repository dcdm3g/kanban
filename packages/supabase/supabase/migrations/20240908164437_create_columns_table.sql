create table columns (
  id uuid primary key default uuid_generate_v4(),
  board_id uuid references boards(id) on delete cascade,
  title text not null
);

create index idx_columns_board_id
on columns(board_id);

alter table columns enable row level security;

create policy "Users can view their own columns."
on columns for select
using (
  exists (
    select 1 from boards
    where boards.id = columns.board_id
  )
);

create policy "Users can create columns."
on columns for insert
to authenticated
with check (
  exists (
    select 1 from boards
    where boards.id = columns.board_id
  )
);

create policy "Users can update their own columns."
on columns for update
to authenticated
using (
  exists (
    select 1 from boards
    where boards.id = columns.board_id
  )
)
with check (
  exists (
    select 1 from boards
    where boards.id = columns.board_id
  )
);

create policy "Users can delete their own columns."
on columns for delete
to authenticated
using (
  exists (
    select 1 from boards
    where boards.id = columns.board_id
  )
);
